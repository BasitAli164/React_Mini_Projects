
export const initialState={
    selectedId:0,
    message:'Hi, I am a Gentleman'
}
export const messengerReducer=(state,action)=>{
    switch(action.type){
        case "changeSelection" :{

        }
        case "eidtedMessage[":{

        }
        default:{
            throw Error('Unknown action'+action.type)
        }
    }

}
