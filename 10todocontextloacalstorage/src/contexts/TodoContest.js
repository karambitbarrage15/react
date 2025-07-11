import {createContext,useContext} from 'react';
export const TodoContext=createContext({
todos: [
  {id:1,
  todo:"Todo message",
  completed:false
  }
  
],
  addTodo:(todo)=>{},
  updatedTodo:(id,todo)=>{},
  deleteTodo: (id)=>{},
 toggleCompelete:(id)=>{}
 

})
export const useTodo=()=>{
  return useContext(TodoContext);
   
}
export const Todoprovider=TodoContext.Provider
