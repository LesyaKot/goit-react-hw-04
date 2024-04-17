// import { useState, useEffect } from "react";
// import "./App.css";
// import Modal from "react-modal";

// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
// import ImageModal from "./components/ImageModal/ImageModal.jsx";
// import Loader from "./components/Loader/Loader.jsx";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import { fetchPhotos } from "./gallery-api";

// function App() {
//   const [images, setImages] = useState([]);
//   const [isloading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   // const [selectedImage, setSelectedImage] = useState("image");

//   const [selectedImage, setSelectedImage] = useState({
//     urls: {
//       regular: "",
//     },
//     alt: "",
//   });

//   const handleSearch = async (newQuery) => {
//     setQuery(newQuery);
//     setPage(1);
//     setImages([]);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   useEffect(() => {
//     if (!query) {
//       return;
//     }
//     async function getPhotos() {
//       try {
//         setError(false);
//         setIsLoading(true);
//         const data = await fetchPhotos(query, page);
//         setImages((prevImages) => {
//           return [...prevImages, ...data];
//         });
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getPhotos();
//   }, [page, query]);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />

//       {images.length > 0 && (
//         <ImageGallery items={images} onClick={openModal} />
//       )}

//       <ErrorMessage error={error} />

//       <Loader isloading={isloading} />

//       {images.length > 0 && (
//         <LoadMoreBtn isLoadMore={true} onClick={handleLoadMore} />
//       )}

//       <ImageModal
//         image={selectedImage}
//         isOpen={modalIsOpen}
//         onClose={closeModal}
//       />
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import "./App.css";
import Modal from "react-modal";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { fetchPhotos } from "./gallery-api";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getPhotos() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}

      <ErrorMessage error={error} />

      <Loader isloading={isloading} />

      {images.length > 0 && (
        <LoadMoreBtn isLoadMore={true} onClick={handleLoadMore} />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      </Modal>
    </>
  );
}

export default App;
