/**Dependencies */
import React, { ChangeEvent, FunctionComponent } from 'react'

/**Types */
import { TodoContainerPropsType, TodoType } from '../types'

const TodoContainer: FunctionComponent<TodoContainerPropsType> = ({
  todolist,
  titleContainer,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <div className='bg-stone-800 rounded-md w-2/4'>
      <div className='flex justify-center items-center py-4 px-6'>
        <h4 className='text-slate-100 text-lg'>{titleContainer}</h4>
      </div>
      <div className='bg-stone-500 py-2 px-4 flex flex-col gap-2 rounded-b-md'>
        {todolist.length === 0 && titleContainer === 'In progress' ? (
          <form className='bg-slate-200 rounded-sm h-14 flex items-center justify-between px-4'>
            <p className='text-stone-500'>No todo started for now...</p>
          </form>
        ) : titleContainer === 'In progress' ? (
          todolist
            .filter((item: TodoType) => !item.status)
            .map((item: TodoType, key) => (
              <form
                key={key}
                className='bg-slate-200 rounded-sm h-14 flex items-center justify-between px-4'
              >
                <p>{item.text}</p>
                <div className='flex items-center justify-center gap-3'>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateTodo(item.id, e.target.checked)
                    }
                    type='checkbox'
                    checked={item.status}
                    className='w-4 h-4 accent-green-500 text-slate-100 border-gray-300 rounded outline-none'
                  />
                  <button
                    className='text-red-500'
                    onClick={() => deleteTodo(item.id)}
                    type='button'
                  >
                    X
                  </button>
                </div>
              </form>
            ))
        ) : null}
        {todolist.length === 0 && titleContainer === 'Finished' ? (
          <form className='bg-slate-200 rounded-sm h-14 flex items-center justify-between px-4'>
            <p className='text-stone-500'>No todo finished for now...</p>
          </form>
        ) : titleContainer === 'Finished' ? (
          todolist
            .filter((item: TodoType) => item.status)
            .map((item: TodoType, key) => (
              <form
                key={key}
                className='bg-slate-200 rounded-sm h-14 flex items-center justify-between px-4'
              >
                <p>{item.text}</p>
                <div className='flex items-center justify-center gap-3'>
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateTodo(item.id, e.target.checked)
                    }
                    type='checkbox'
                    checked={item.status}
                    className='w-4 h-4 accent-green-500 text-slate-100 border-gray-300 rounded outline-none'
                  />
                  <button
                    className='text-red-500'
                    onClick={() => deleteTodo(item.id)}
                    type='button'
                  >
                    X
                  </button>
                </div>
              </form>
            ))
        ) : null}
      </div>
    </div>
  )
}

export default TodoContainer
