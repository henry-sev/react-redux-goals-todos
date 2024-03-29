import React from 'react'
import {connect} from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from '../actions/todos'


class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''   //这里通过设置一个函数作为参数来更新input值。
      ))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  }

  toggleItem = (todo) => {
    this.props.dispatch(handleToggleTodo(todo));
  }

  render () {
    return (
      <div>
        <h1>Todo List</h1>
        <input 
          type="text" 
          placeholder="add todo" 
          ref={input => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List 
          items={this.props.todos} 
          remove={this.removeItem} 
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)