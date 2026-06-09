import { useFadeIn } from '../hooks/useFadeIn'
import { personal } from '../data'
import styles from './About.module.css'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about">
      <div className="sec-label">About</div>
      <div className={`${styles.grid} fade-in`} ref={ref}>
        <p className={styles.quote}>"{personal.bio}"</p>
        <div className={styles.details}>
          {[
            ['Degree',     personal.degree],
            ['Focus',      personal.focus],
            ['Currently',  personal.status],
            ['Based in',   personal.location],
          ].map(([label, value]) => (
            <div className={styles.row} key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
