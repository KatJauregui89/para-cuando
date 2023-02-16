import styles from './Buscador.module.css';

export function Buscador() {
  return (
    <input
      placeholder="¿Qué quieres ver en tu ciudad?"
      className={styles.input}
    ></input>
  );
}
