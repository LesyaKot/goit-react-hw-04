
  export default function ImageCard({ image }) {
    const { id, title, urls: { small} } = image;

    return (
      <div key={id}>
        <img src={small} alt={title} />
      </div>
    );
}