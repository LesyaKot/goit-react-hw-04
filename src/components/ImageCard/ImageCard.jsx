import styles from './ImageCard.module.css'

export default function ImageCard({ image, onClick }) {
  return (
    <div className={styles.wrap} onClick={() => onClick(image.urls.small)}> 
      <img className={styles.img} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}