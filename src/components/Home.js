import React from 'react'
import TodoForm from './Todo-form/Todo-form'
import TodoList from './Todo-list/Todo-list'

const Home = () => {
  return (
    <div className='home'>
      <h1>Number of Todos 0</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default Home
