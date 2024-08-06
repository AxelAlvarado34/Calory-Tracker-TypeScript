import { ActivityType } from "../types"
import styles from '../styles/card.module.css'
import { ActivityActions } from "../reducer/useCalorie"

type ActivityCardProps = {
    activity: ActivityType
    dispatch: React.Dispatch<ActivityActions>
}

export const ActivityCard = ({ activity, dispatch }: ActivityCardProps) => {

    const nameCategory = () => {
        return activity.category === 1 ? 'Food' : 'Exercise'
    }

    return (
        <div className={styles.card}>
            <div>
                <div className={activity.category === 1 ? styles.category_1 : styles.category_2}>{nameCategory()}</div>

                <h1 className={styles.name}>{activity.name}</h1>
                <p className={styles.calories}>{activity.calories}{' '}Calories</p>
            </div>

            <div className={styles.buttons}>
                <button 
                    className={styles.edit}
                    onClick={()=> {
                        dispatch({type: "get-ID", payload: {id: activity.id}})
                    }}
                >
                    
                    Edit
                </button>
                
                <button 
                    className={styles.delete}
                    
                    onClick={()=> {
                        dispatch({type: "delete-activity", payload: {id: activity.id}})
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
