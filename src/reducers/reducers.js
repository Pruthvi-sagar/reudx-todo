
const initialData = {
    list: [],
    name:'bcv'
}
const reducers = (state = initialData, action) => {
    console.log(action)
    switch (action.type) {
        case "AddTodo":{
            return {
                list:[
                ...state.list,
                {
                    id:action.payload.id,
                    data:action.payload.data
                }
            ]
            }
        }
        case "deleteTodo":
            const newList = state.list.filter((elem) => elem.id !== action.payload)
            return {
                ...state,
                list:newList
            }
            case "removeTodo":return{
                ...state,
                list:[]
            }
        default: return state;
    }


}
export default reducers;