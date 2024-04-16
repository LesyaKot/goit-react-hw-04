import { useState, useEffect } from "react";
import "./App.css";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { fetchPhotos } from "./gallery-api";

function App() {
  const [query, setQuery] = useState("");

  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };


  useEffect(() => {
    if (!query) {
      return;
    }
    async function getPhotos() {
      try {
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

      {images.length > 0 && <ImageGallery items={images} />}

      <ErrorMessage error={error} />

      <Loader isloading={isloading} />

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}

export default App;
