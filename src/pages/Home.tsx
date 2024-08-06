import { useEffect, useReducer } from 'react'
import { Form } from '../components/Form'
import styles from '../styles/home.module.css'
import { Fade } from 'react-awesome-reveal'
import { activityReducer, initialState } from '../reducer/useCalorie'
import { ActivityCard } from '../components/ActivityCard'
import { Stadistic } from '../components/Stadistic'

export const Home = () => {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(()=> {
      localStorage.setItem('activities', JSON.stringify(state?.activities));
  }, [state?.activities])

  return (
    <div className={styles.container_home}>
      <header className={styles.header}>
        <div className={styles.text_container}>

          <Fade direction='down' triggerOnce={true}>
            <figure>
              <img src="/img/logo.png" alt="logo_home" className={styles.logo} />
            </figure>
          </Fade>

          <Fade direction='down' delay={1} triggerOnce={true}>
            <h1 className={styles.title_home}>
              Calories{' '}
              <Fade direction='down' delay={1.2} triggerOnce={true}>
                <span className={styles.text_style}>Tracker</span>
              </Fade>
            </h1>
          </Fade>


        </div>

        <Fade direction='down' triggerOnce={true}>
          <button
            className={styles.btn_reset}
            onClick={() => {
              dispatch({ type: 'reset-app' })
            }}
          >
            Reset App
          </button>
        </Fade>

      </header>

      <section className={styles.section_form}>
        <Form
          state={state!}
          dispatch={dispatch}
        />

        <section className={styles.section_cards_grid}>
          {
            state?.activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                dispatch={dispatch}
              />
            ))
          }
        </section>
      </section>

      <section className={styles.section_numbers}>
          <Stadistic
            state={state!}
          />
      </section>
    </div>
  )
}
