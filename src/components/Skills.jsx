import { useFadeIn } from '../hooks/useFadeIn'
import { skills } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useFadeIn()

  return (
    <section id="skills">
      <div className="sec-label">Skills</div>
      <div className={`${styles.grid} fade-in`} ref={ref}>
        {skills.map((group, i) => (
          <div className={styles.cat} key={i}>
            <div className={styles.catTitle}>{group.category}</div>
            <div className={styles.tags}>
              {group.items.map(item => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
