export const AddTodo = (data) =>{
    console.log(data)
    return(dispatch)=>{
        dispatch( {
            type:"AddTodo",
            payload:{
                id:new Date().getTime().toString(),
                data:data
            }
            })
    }
       
    }

export const deleteTodo =(id) =>{
    return{
        type:"deleteTodo",
        payload:id
    }
}
export const removeTodo =() =>{
    return{
        type:"removeTodo"
    }
}