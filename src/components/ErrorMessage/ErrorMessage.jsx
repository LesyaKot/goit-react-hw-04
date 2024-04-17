import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ error }) {
  return <div>{error && <p className={styles.text}>Oops! There was an error! Please reload!</p>}</div>;
}
