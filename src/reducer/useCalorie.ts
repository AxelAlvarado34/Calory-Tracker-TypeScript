import { ActivityType } from "../types"

export type ActivityActions = 
    {type: 'add-activity', payload: {activity: ActivityType}} |
    {type: 'reset-app'} |
    {type: 'get-ID' , payload: {id: ActivityType['id']}} |
    {type: 'delete-activity' , payload: {id: ActivityType['id']}}

export type ActivityState = {
    activities : ActivityType[]
    activeID: string
}

const getLocalStorage = ()=> {
    return JSON.parse(localStorage.getItem('activities') || '[]') 
}

export const initialState : ActivityState = {
    activities: getLocalStorage(),
    activeID: ''
}

export const activityReducer = (
        state: ActivityState = initialState,
        action: ActivityActions    
    )=> {
        if (action.type === "add-activity") {

            let activitiesUpdate : ActivityType[] = [];

            if (state.activeID) {
                
                activitiesUpdate = state.activities.map((activityState)=> {
                    return activityState.id === state.activeID ? action.payload.activity : activityState
                })

            }else{
                activitiesUpdate = [...state.activities, action.payload.activity];
            }
            
            return{
                ...state,
                activities: activitiesUpdate,
                activeID: ''
            }
        }

        if (action.type === "reset-app") {
            
            return{
                ...state,
                activities: [],
                activeID: ''
            }
        }

        if (action.type === "get-ID") {
            
            return{
                ...state,
                activeID: action.payload.id
            }
        }

        if (action.type === "delete-activity") {
            
            const activitiesUpdate = state.activities.filter((activityState)=> {
                return activityState.id !== action.payload.id;
            })

            return{
                ...state,
                activities: activitiesUpdate
            }
        }
}