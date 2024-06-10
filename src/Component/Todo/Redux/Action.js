

let currentId=1;
const AddTodo = (todoList, status = 'pending') => {
 const tid=currentId++
    
  return { 
    type: "AddTodo",
    payload: { TodoList: {tid,...todoList, status } }}
};

const FinishedTodo=(tid, status='Finished') => ({
    type:"FinishedTodo",
    payload:{tid,status}
})
const ClearTodo=() => ({
    type:"ClearTodo",
    
})
export { AddTodo,FinishedTodo,ClearTodo};
