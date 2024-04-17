import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function ImageModal({ image, onClose, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      style={customStyles}
      contentLabel="{title}"
    >
      <div>
        <button onClick={onClose}>Close Modal</button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}
