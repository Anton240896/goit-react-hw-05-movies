import { useState, useEffect } from 'react';

// import { FaYoutube } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';
import { requestTrailer } from 'components/Api/Api';
import { ContTrailer } from 'components/Trailer/Trailer.styled';

export const MovieTrailer = ({ movieId }) => {
  /*   ====== HOOKS ======*/
  const [trailer, setTrailer] = useState();
  const [loading, setLoading] = useState(false);

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
    <div>
      <ContTrailer>
        {trailer && (
          <iframe
            width="200"
            height="100"
            title="movie-trailer"
            src={`https://www.youtube.com/embed/${trailer}`}
            allowFullScreen
          ></iframe>
        )}
        {/* <FaYoutube
          size={80}
          style={{ position: 'absolute', top: '300px', right: '800px' }}
        /> */}
      </ContTrailer>

      {loading && <Loader />}
    </div>
  );
};
