import { Box } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { Header, Panel , TodoList} from './components';



export type Todo ={
  id: number;
  name: string;
  description: string;
  checked: boolean;
}


function App() {

  const [todoList, setTodoList] = useState([
    {id: 1, name: 'task 1', description: 'test1', checked: false, },
    {id: 2, name: 'task 2', description: 'test2', checked: true, },
    {id: 3, name: 'task 3', description: 'test3', checked: false, },
  ])


  const deleteTodo = (id: Todo['id']) =>{
    setTodoList(todoList.filter(todo=> todo.id !== id))
  }

  const addTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) =>{
    setTodoList([...todoList, {id: todoList[todoList.length -1].id + 1, description, name , checked: false}])
  }

  const checkedTodo = (id: Todo['id']) =>{
    setTodoList(todoList.map(todo => {
      if(todo.id===id){
        return {...todo, checked: !todo.checked}
      }
      return todo
    }))
  }


  return (
    <div className="App">
      <Box display="flex" flexDirection="column"  sx={{ margin: '100px 0px 0px 0px'}}>
          <Header/>
          <Panel addTodo={addTodo}/>
          <TodoList todoList={todoList} deleteTodo={deleteTodo} checkedTodo={checkedTodo}/>
      </Box>
    </div>
  );
}

export default App;
