
import { useState, useEffect , useRef} from "react";
import axios from 'axios';

import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Modal from './components/Modal';


axios.defaults.baseURL = 'https://pixabay.com';


const ImagesFinder = () => {

  
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [activeImg, setActiveImg] = useState('')
  
  const listRef = useRef();
  console.log(listRef);

  useEffect(() => {
    const fetchImages = async () => {
            try{
                const url = `/api/?q=${searchQuery}&page=${page}&key=20930495-600a23973a3be0872b747cdc1&image_type=photo&orientation=horizontal&per_page=12`;
              const { data } = await axios.get(url);
              setLoading(false);
              setImages([...images, ...data.hits]);
              
            }
            catch(error){
                setError(error)
            }
        }
        if(loading){
            fetchImages();
        }

  }, [searchQuery, page])


  const loadMore = () => {
        const prevPage=page
        setPage(prevPage+1)
        setLoading(true);
    }

  const onChangeQuery = ({ query })=> {
    setSearchQuery(query);
    setImages([])
    setPage(1)
    setLoading(true)
    setError(null)
  };


  const toggleModal = (src) => {
    setShowModal(!showModal)
    setActiveImg(src)
  };

  return (
    
      <>
        {showModal && <Modal onClose={toggleModal}>
          <img src={activeImg} alt=""/>
        </Modal>}

        <Searchbar onSubmit={onChangeQuery} />

        {error && <ErrorMessage text={error} />}
        
        <div ref={listRef}>
      <ImageGallery images={images} onClick={toggleModal}/>
      
        </div>
        
        {loading && <Loader />}

      {images.length > 0 && !loading && <Button onClick={loadMore}>Load more</Button>}
      </>
    );
}


export default ImagesFinder

