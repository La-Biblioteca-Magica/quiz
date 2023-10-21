import styles from './navbar.module.scss';
export default function Navbar() {
  return <nav className={styles.navbar}>
    <a href="/" className={styles.navbar__title}>La Biblioteca Mágica</a>
    <div role="menu">
      <img src="/icons/menu.svg" alt="Icono del menu de la pagina" />
    </div>
  </nav>
}