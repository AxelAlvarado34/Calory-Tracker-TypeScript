import { Fade } from 'react-awesome-reveal'
import styles from '../styles/stadistic.module.css'
import { ActivityState } from '../reducer/useCalorie'
import { useMemo } from 'react'

type StadisticProps = {
    state: ActivityState
}

export const Stadistic = ({state} : StadisticProps) => {
    
    const consumeAmount = useMemo(()=> {
        return state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0 );
    }, [state.activities])

    const burnedAmount = useMemo(()=> {
        return state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0 );
    }, [state.activities])
    
    const totalAmount = useMemo(()=> {
        return consumeAmount - burnedAmount;
    }, [state.activities])

    return (
        <div className={styles.stadistic_container}>

            <Fade direction='down' triggerOnce={true}>
                <div className={styles.stadistic_div_consume}>
                    <figure className={styles.img_container}>
                        <img src="/img/salad.png" alt="salad" className={styles.image} />
                    </figure>

                    <div className={styles.stadistic_text}>
                        <p className={styles.number}>{consumeAmount}</p>
                        <p className={styles.label}>Consumed</p>
                    </div>

                </div>
            </Fade>

            <Fade direction='down' triggerOnce={true} delay={150}>
                <div className={styles.stadistic_div_fire}>
                    <figure className={styles.img_container}>
                        <img src="/img/fire.png" alt="salad" className={styles.image} />
                    </figure>

                    <div className={styles.stadistic_text}>
                        <p className={styles.number}>{burnedAmount}</p>
                        <p className={styles.label}>Burned</p>
                    </div>

                </div>
            </Fade>

            <Fade direction='down' triggerOnce={true} delay={200}>
                <div className={styles.stadistic_div_total}>
                    <figure className={styles.img_container}>
                        <img src="/img/weight.png" alt="salad" className={styles.image} />
                    </figure>

                    <div className={styles.stadistic_text}>
                        <p className={styles.number}>{totalAmount}</p>
                        <p className={styles.label}>Total</p>
                    </div>

                </div>
            </Fade>
        </div>
    )
}
