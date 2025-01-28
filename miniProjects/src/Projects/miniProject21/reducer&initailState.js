export const tasksInitialState =[
    {id:0,text:"Philosopher's Path",done:true},
    {id:1,text:"Reading Books Daily",done:false},
]
export const taskReducer=(task,action)=>{
    switch(action.type){
        case 'added':{
            return [
                ...task,
                {
                    id:action.id,
                    text:action.text,
                    done:false
                }
            ]
        }
        case 'changed':{
            return task.map((item)=>item.id===action.task.id? action.task :item)
        }
        case 'deleted':{
            return task.filter((item)=>item.id!=action.id)
        }
        default:{
            throw Error(`Unknown Action ${action.type}`)
        }
    }
}