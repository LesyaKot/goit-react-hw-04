
export default function LoadMoreBtn({ isLoadMore, onClick }) {
  return (
    <div>
      {isLoadMore && <button onClick={onClick}>Load more</button>}
    </div>
  );
}
