import { useFadeIn } from '../hooks/useFadeIn'
import { personal } from '../data'
import styles from './Contact.module.css'

const links = [
  { label: personal.email,                      href: `mailto:${personal.email}`,  ext: 'Email ↗' },
  { label: personal.github.replace('https://',  ''), href: personal.github,         ext: 'GitHub ↗' },
  { label: personal.linkedin.replace('https://', ''), href: personal.linkedin,      ext: 'LinkedIn ↗' },
  { label: 'Resume.pdf',                         href: personal.resume,             ext: 'Download ↗' },
]

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section id="contact">
      <div className="sec-label">Contact</div>
      <div className={`${styles.inner} fade-in`} ref={ref}>
        <div className={styles.left}>
          <p className={styles.big}>Let's work<br />together.</p>
          <p className={styles.sub}>I'm actively looking for de opportunities. If you're building something interesting or just want to talk code, reach out.</p>
        </div>
        <div className={styles.linkList}>
          {links.map((l) => (
            <a className={styles.link} href={l.href} key={l.label} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
              <span>{l.label}</span>
              <span className={styles.ext}>{l.ext}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
