/**Dependencies */
import React, { ChangeEvent, FunctionComponent } from 'react'

/**Types */
import { TodoPropsType } from '../types'

const Todo: FunctionComponent<TodoPropsType> = ({
  item,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <form className='bg-slate-200 rounded-sm h-14 flex items-center justify-between px-4'>
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
  )
}

export default Todo
