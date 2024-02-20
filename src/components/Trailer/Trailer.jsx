import { useState, useEffect, useRef } from 'react';

import {
  OverlayModal,
  ContTrailer,
  Frame,
  BtnTrailer,
  NoTrailer,
} from './Trailer.styled';

import { requestTrailer } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';

export const MovieTrailer = ({ movieId }) => {
  /*   ====== HOOKS ======*/
  const [trailer, setTrailer] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

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
        console.error('Nothing found');
      } finally {
        setLoading(false);
      }
    }
    getMovieTrailer();
  }, [movieId]);

  /*   ====== MODAL CLOSES ANYWHERE ======*/
  useEffect(() => {
    const handleClickOutside = evt => {
      if (modalRef.current && !modalRef.current.contains(evt.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /*   ====== MODAL OPEN & CLOSE ======*/
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /*   ====== DESTRUCTURIZATION - TRAILER  ======*/
  const trailerShow = trailer ? (
    <Frame src={`https://www.youtube.com/embed/${trailer}`} allowFullScreen />
  ) : (
    <NoTrailer>No trailer found</NoTrailer>
  );

  /*   ====== RENDER  ======*/
  return (
    <ContTrailer ref={modalRef}>
      <BtnTrailer size={120} onClick={openModal} />

      <OverlayModal isOpen={isModalOpen} onRequestClose={closeModal}>
        {trailerShow}
        {loading && <Loader />}
      </OverlayModal>
    </ContTrailer>
  );
};
