import { useState, useEffect } from 'react';

import { requestTrailer } from 'components/Api/Api';
import { ContTrailer, Frame, BtnTrailer, OverlayModal } from './Trailer.styled';
import { Loader } from 'components/Loader/Loader';

import toast from 'react-hot-toast';

  /*   ====== HOOKS ======*/
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


  /*   ====== EFFECT-TRAILER ======*/
  useEffect(() => {
    async function getMovieTrailer() {
      try {
        setLoading(true);
        const data = await requestTrailer(movieId);

        if (data.length > 0) {
          setTrailer(data[0].key);
        }
      } catch (error) {
        toast.error('Nothing found');
      } finally {
        setLoading(false);
      }
    }
    getMovieTrailer();
  }, [movieId]);

    /*   ====== RENDER ======*/
  return (
    <>
      <BtnTrailer size={120} onClick={openModal} />
      <OverlayModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <ContTrailer>
          {trailer && (
            <Frame src={`https://www.youtube.com/embed/${trailer}`} allowFullScreen></Frame>
          )}
          {loading && <Loader />}
        </ContTrailer>
      </OverlayModal>
    </>
  );
};