/**Dependencies */
import React, { ChangeEvent, FormEvent } from 'react'
import { useState, useRef } from 'react'
import uuid from 'react-uuid'

/**Types */
import { TodoType } from './types'

/**Components */
import TodoContainer from './components/TodoContainer'

const App = () => {
  const [todolist, setTodolist] = useState<TodoType[]>([])
  const [addTodo, setAddtodo] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent, text: string) => {
    e.preventDefault()

    const newTodo: TodoType = {
      id: uuid(),
      text: text,
      status: false,
    }

    setTodolist([...todolist, newTodo])
    setAddtodo('')
    console.log(todolist)
  }

  const updateTodo = (id: string, checked: boolean): void => {
    return setTodolist((prev) =>
      prev.map((item: TodoType) =>
        item.id === id ? { ...item, status: checked } : item
      )
    )
  }

  const deleteTodo = (id: string): void => {
    const arr = todolist.filter((item: TodoType) => item.id !== id)
    setTodolist(arr)
  }

  return (
    <div className='flex flex-col items-center mx-auto px-4 py-4 bg-stone-700 min-h-screen font-global overflow-y-scroll'>
      <h3 className='my-10 text-2xl text-slate-100 tracking-wide'>
        TodoList App Typescript
      </h3>
      <form
        onSubmit={(e: FormEvent) => {
          handleSubmit(e, addTodo)
        }}
        className='font-global w-2/5 py-4 px-4 bg-stone-800 rounded-md flex items-center justify-center gap-2'
      >
        <input
          ref={inputRef}
          value={addTodo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAddtodo(e.target.value)
          }}
          placeholder='Type here your todo...'
          className='bg-slate-100 rounded-md w-3/4 py-2 pl-3 text-sm text-stone-800 placeholder:text-stone-500 outline-none'
        />
        <input
          className='bg-stone-500 w-1/4 py-2 text-sm text-slate-100 rounded-md cursor-pointer'
          type='submit'
          value='Add'
        />
      </form>
      <div className='flex items-start justify-center gap-4 mx-auto w-4/5 py-2 px-2 my-10'>
        <TodoContainer
          todolist={todolist}
          titleContainer={'In progress'}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <TodoContainer
          todolist={todolist}
          titleContainer={'Finished'}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
