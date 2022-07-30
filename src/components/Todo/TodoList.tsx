import { Box } from '@mui/material'
import React, { FC } from 'react'
import type { Todo } from '../../App'
import { TodoItem } from './TodoItem/TodoItem'


interface todoListProps {
  todoList : Todo  [],
  deleteTodo : (id: Todo['id']) => void,
  checkedTodo: (id: Todo['id']) => void,
}


export const TodoList: FC<todoListProps> = ({todoList, deleteTodo, checkedTodo}) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap='10px' margin='10px 0px 0px 0px'>
      {todoList.map((todo)=><TodoItem todo={todo} deleteTodo={deleteTodo} checkedTodo={checkedTodo}></TodoItem>)}
    </Box>
  )
}
