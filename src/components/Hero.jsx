import { useFadeIn } from '../hooks/useFadeIn'
import { personal } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useFadeIn(80)

  return (
    <div className={`${styles.hero} fade-in`} ref={ref}>

      {/* ── Left: Photo ── */}
      <div className={styles.left}>
        <div className={styles.imgWrap}>
          {/* Replace /profile.jpg with your actual photo in /public */}
          <img
            src="/profile.jpg"
            alt="Isha Singh"
            className={styles.photo}
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback placeholder shown if no image uploaded yet */}
          <div className={styles.placeholder} style={{ display: 'none' }}>
            <span>Add photo to<br />/public/profile.jpg</span>
          </div>
        </div>
      </div>

      {/* ── Right: Text ── */}
      <div className={styles.right}>
        
        <h1 className={styles.name}>
          Hey,<br />
          <span>I'm Isha.</span>
        </h1>
        <p className={styles.desc}>
          CS undergrad. I build things with the MERN stack.<br />
          I spend weekends arguing with data structures.
        </p>
        <div className={styles.status}>
          <span className={styles.dot} />
          {personal.status}
        </div>
        <a className={styles.cta} href="#projects">View Projects →</a>
      </div>

    </div>
  )
}