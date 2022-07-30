import {TextField, Paper, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { FC, useState } from 'react'
import type { Todo } from '../../App';


const DEFAULT_TODO = {name: '', description: ''};

interface PanelProps {
	addTodo: ({name, description}: Omit < Todo, 'id' | 'checked'>) => void ;
}

export const Panel: FC<PanelProps> = ({addTodo}) => {

	const [todo, setTodo] = useState(DEFAULT_TODO)

	const addPost = ()=>{
		addTodo(todo)
		setTodo(DEFAULT_TODO);
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
		const {value, name} = event.target
		console.log(name, value)
		setTodo({...todo, [name] : value})
	}


  return (
	<Paper elevation={6} 
	sx={{ 
		padding: "15px 15px" , display: 'flex' , gap: '20px' ,alignItems: 'center', justifyContent: 'center', width: '650px'
	}}>
		<TextField 
		fullWidth
		name='name'
		value={todo.name}
		onChange={onChange}
		label="Todo Name" 
		/>
		<TextField 
		fullWidth
		name='description'
		value={todo.description}
		onChange={onChange}
		label="Todo text" 
		/>
		<Button 
		sx={{padding: '15px'}}
		variant="contained" 
		color="success"
		onClick={addPost}
		endIcon={<AddIcon/>}
		>Add</Button>
	</Paper>
	
  )
}
