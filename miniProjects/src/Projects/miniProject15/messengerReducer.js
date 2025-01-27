import { act } from "react";

export const initialState={
    selectedId:0,
    message:'Hellow'
}
export function messangerReducer(state,action){
    switch(action.type){
        case 'changeSelection':{
            return {
                ...state,
                selectedId:action.contactId,
                message:'',
            }

        }
        case '':{

        }
        default:{
            throw Error(`Unknown action ${action.type}`)
        }

    }
}