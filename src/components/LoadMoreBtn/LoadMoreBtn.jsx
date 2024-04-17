import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ isLoadMore, onClick }) {
  return (
    <div className={styles.wrap}>
      {isLoadMore && (
        <button className={styles.btn} onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
}
