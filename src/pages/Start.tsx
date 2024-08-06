import { NavLink } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import styles from '../styles/start.module.css'

export const Start = () => {

  return (
    <div className={styles.container}>

      <div className={styles.grid_1}></div>

      <div className={styles.grid_2}>

        <figure>
          <img src="/img/bub-1-log.png" alt="nut" className={styles.bub_bk_1} />
          <img src="/img/bub-2-log.png" alt="nut" className={styles.bub_bk_2} />
          <img src="/img/bub-3-log.png" alt="nut" className={styles.bub_bk_3} />
        </figure>

        <div className={styles.btn_div}>

          <Fade direction='right' triggerOnce={true}>
            <h2 className={styles.title}>
              Calories
              <Fade direction='right' triggerOnce={true} delay={1}>
                <span className={styles.title_span}>Tracker</span>
              </Fade>
            </h2>
          </Fade>

          <NavLink to={'/home'}>
            <button className={styles.btn}>
              Get Started
            </button>
          </NavLink>
        </div>

        <figure>
          <img src="/img/bub-4-log.png" alt="nut" className={styles.bub_bk_4} />
          <img src="/img/bub-5-log.png" alt="nut" className={styles.bub_bk_5} />
          <img src="/img/bub-3-log.png" alt="nut" className={styles.bub_bk_6} />
        </figure>
      </div>

    </div>
  )
}
