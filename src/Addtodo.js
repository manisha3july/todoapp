import React, { Component } from 'react';
import Todos from './Todos';
class AddTodo extends Component{
    state = {
      content:''

    }
    handelChange = (e) => {
            this.setState({
                content:e.target.value
            })
            
    }
    handelSubmit =(e) => {
      e.preventDefault()
      this.props.addTodo(this.state)

      this.setState({
        content:''
      })
    }
  render(){
      return(
          <div>
          <form onSubmit={this.handelSubmit}>
             <label>Add New Todo:</label>
             <input type="text" onChange={this.handelChange} value={this.state.content}/>
             <button>Add Todo</button>
          </form>
          </div>
      )
  }
}


export default AddTodo