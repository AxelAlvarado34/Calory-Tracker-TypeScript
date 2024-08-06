import { Fade } from 'react-awesome-reveal'
import styles from '../styles/form.module.css'
import { useEffect, useState } from 'react'
import { categories } from '../data/data'
import { ActivityType } from '../types'
import { ActivityActions, ActivityState } from '../reducer/useCalorie'

type FormProps = {
    state: ActivityState
    dispatch: React.Dispatch<ActivityActions>
}

export const Form = ({dispatch, state} : FormProps) => {

    const initialState = {
        id: '',
        category: 1,
        name: '',
        calories: 0
    }

    useEffect(()=> {
        if (state.activeID) {
            const itemSelect = state.activities.filter((activity) => activity.id === state.activeID)[0];
            setActivity(itemSelect) 
        }
    }, [state.activeID])

    const[activity, setActivity] = useState<ActivityType>(initialState)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=> {
        const isNumber = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            id: crypto.randomUUID(),
            [e.target.id] : isNumber ?  +e.target.value : e.target.value
        })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        dispatch({type:'add-activity', payload: {activity}})
        setActivity(initialState)
    }

    const isValid = ()=> {
        return activity.calories > 0 &&  activity.name !== '';
    }

    return (
        <form 
            className={styles.form} 
            onSubmit={handleSubmit}
        >
            <Fade triggerOnce={true}>
                <div className={styles.field}>
                    <select 
                        name="category" 
                        id="category" 
                        className={styles.input_form}

                        value={activity.category}
                        onChange={handleChange}
                    > 
                        {
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div className={styles.field}>
                    <input
                        type='text'
                        name="name"
                        id="name"
                        placeholder='Activity name...'
                        className={styles.input_form}

                        value={activity.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.field}>
                    <input
                        type='number'
                        placeholder='Calories: 300kg or 500kg'
                        min={0}
                        name="calories"
                        id="calories"
                        className={styles.input_form}

                        value={activity.calories}
                        onChange={handleChange}
                    />
                </div>

                <Fade direction='up' triggerOnce={true}>
                    <input
                        value={'Save Activity'}
                        type="submit"
                        className={styles.input_submit}
                        disabled={!isValid()}
                    />
                </Fade>

            </Fade>
        </form>
    )
}
