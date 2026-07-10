import styles from './Footer.module.css'
import { personal } from '../data'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{personal.name} © {new Date().getFullYear()}</span>
      <span>Have a feedback ? Drop me a mail.</span>
    </footer>
  )
}
