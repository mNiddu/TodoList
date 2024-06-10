const initialState = []; // Define the initial state

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AddTodo":
            return [...state, action.payload.TodoList];

            case "FinishedTodo":
                return state.map((list)=>list.tid===action.payload.tid ? {...list,status:action.payload.status}:list);
            case "ClearTodo":
                return state=[];
        default:
            return state;
    }
}

export default TodoReducer;
