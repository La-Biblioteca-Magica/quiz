import styles from './menu.module.scss';
import Link from "next/link";

export default function Menu({ visible, handleVisibility }: { visible: boolean, handleVisibility: Function }) {

  return <div className={styles.wrapper} aria-hidden={!visible} onClick={() => handleVisibility()}>
    <ul>
      <li><Link href={'/'}>Inicio</Link></li>
      <li><Link href={'/contact'}>Contacto</Link></li>
    </ul>
  </div>
}