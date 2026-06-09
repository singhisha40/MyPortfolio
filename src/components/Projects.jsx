import { useFadeIn } from '../hooks/useFadeIn'
import { projects } from '../data'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects">
      <div className="sec-label">Projects</div>
      <div className={`${styles.grid} fade-in`} ref={ref}>
        {projects.map((p) => (
          <div className={styles.card} key={p.num}>
            <div className={styles.num}>{p.num}</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.stack}>
              {p.stack.map(s => <span className="tag" key={s}>{s}</span>)}
            </div>
            <div className={styles.links}>
              {p.github && <a className={styles.link} href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
              {p.live   && <a className={styles.link} href={p.live}   target="_blank" rel="noreferrer">Live ↗</a>}
              {!p.live  && p.github && <span className={styles.wip}>API only</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
