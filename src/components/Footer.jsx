import styles from './Footer.module.css'
import { personal } from '../data'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{personal.name} © {new Date().getFullYear()}</span>
      <span>Built with React · Deployed on Vercel</span>
    </footer>
  )
}
