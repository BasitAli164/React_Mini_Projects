export const initialState={
    selectedId:0,
    message:{
        0:'Hello Basit',
        1:'Hello Sakina',
        2:'Hello Khatija'
    }
}
export function messangerReducer(state,action){
    console.log(state)
    switch(action.type){
        case 'changeSelection':{
            return {
                ...state,
               selectedId:action.contactId
            }

        }
        case 'editMessage':{
            return{
                ...state,
                message:{
                    ...state.message,
                    [state.selectedId]:''
                }
            }

        }
        case 'handleClick':{
            return{
                ...state,
                message:action.message,
                func:alert(`Send ${action.name}\n to ${action.email}`),
            }
        }
        default:{
            throw Error(`Unknown action ${action.type}`)
        }

    }
}