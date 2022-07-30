import { Box, Paper, Typography, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteForever';
import React, { FC } from 'react'
import {Todo} from '../../../App'


interface TodoItemProps {
	todo: Todo,
	deleteTodo : (id: Todo['id']) => void,
	checkedTodo: (id: Todo['id']) => void,
}

export const TodoItem: FC<TodoItemProps> = ({todo, deleteTodo, checkedTodo}) => {
  return (
	<Paper 
	elevation={6} 
	sx={{padding: "15px 15px" ,display: 'flex' , width: '650px', justifyContent: 'space-between' , opacity: todo.checked ? '0.5' : 'none'}}
	>
		<Box display='flex' flexDirection='column' gap='5px' >
			<Box>
				<Typography onClick={()=> checkedTodo(todo.id)} sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' ,fontSize: 30 , color: todo.checked ? 'green' : 'black', textTransform: 'uppercase' , margin: '0px' }} variant="h4" component="h4" gutterBottom>
					{todo.name}
				</Typography>
			</Box>
			<Box>
				<Typography sx={{ fontSize: 20 , color: 'black', textTransform: 'uppercase', margin: '0px' }} variant="subtitle1" component="div" gutterBottom>
					{todo.description}
				</Typography>
			</Box>
		</Box>
		<Box display='flex' alignItems='center' >
		<IconButton onClick={()=>deleteTodo(todo.id)} aria-label="delete" color="error" size="large">
			<DeleteIcon fontSize="inherit" />
		</IconButton>
		</Box>
	</Paper>
  )
}
