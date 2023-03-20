/**Dependencies */
import React, { FunctionComponent } from 'react'

/**Types */
import { TodoContainerPropsType, TodoType } from '../types'

/**Components */
import Todo from './Todo'

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
        {titleContainer === 'In progress'
          ? todolist
              .filter((item: TodoType) => !item.status)
              .map((item: TodoType, key) => (
                <Todo
                  key={key}
                  item={item}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              ))
          : titleContainer === 'Finished'
          ? todolist
              .filter((item: TodoType) => item.status)
              .map((item: TodoType, key) => (
                <Todo
                  key={key}
                  item={item}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              ))
          : null}
      </div>
    </div>
  )
}

export default TodoContainer
