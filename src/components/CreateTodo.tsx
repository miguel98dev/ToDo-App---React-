import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addTodo({ title: inputValue })
    setInputValue('')
  }

  return (
        <form onSubmit={handleSubmit}>
        <input
            className='new-todo'
            value={inputValue}
            onChange={(event) => { setInputValue(event.target.value) }}
            placeholder='¿Qué quieres hacer?'
            autoFocus
        />
        </form>
  )
}
