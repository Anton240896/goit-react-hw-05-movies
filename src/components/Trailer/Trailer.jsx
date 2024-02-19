import { useState, useEffect } from 'react';
import { OverlayModal, ContTrailer, Frame, BtnTrailer } from './Trailer.styled';
import { requestTrailer } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
// import toast from 'react-hot-toast';

export const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function getMovieTrailer() {
      try {
        setLoading(true);
        const data = await requestTrailer(movieId);

        if (data.length > 0) {
          setTrailer(data[1].key);
        }
        
        else if(data.length === 0) {
          setTrailer(false);
        }
       
      } catch (error) {
        console.error('Nothing found');
      } finally {
        setLoading(false);
      }
    }
    getMovieTrailer();
  }, [movieId]);

  return (
    <ContTrailer>
      <BtnTrailer size={120} onClick={openModal} />
      <OverlayModal isOpen={isModalOpen} onRequestClose={closeModal}>
        {trailer && <Frame src={`https://www.youtube.com/embed/${trailer}`} allowFullScreen></Frame>}
        {loading && <Loader />}
      </OverlayModal>
    </ContTrailer>
  );
};
