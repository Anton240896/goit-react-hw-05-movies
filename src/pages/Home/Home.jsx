import React, { useEffect, useState } from 'react';
import ListFilms from 'pages/ListFilms/ListFilms';
import { requestTrending } from 'components/Api/Api';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

/*   ====== HOOKS ======*/
const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  /*   ====== REQUEST FILMS TRENDING ======*/
  useEffect(() => {
    const getRequestTrending = async () => {
      setLoading(true);

      try {
        const trendingFilms = await requestTrending();
        setFilms(trendingFilms);
      } catch (error) {
        toast.error('🥺 Sorry, we found nothing');
      } finally {
        setLoading(false);
      }
    };

    getRequestTrending();
  }, []);

  /*   ====== RENDER ======*/
  return (
    <div>
      <h1>Trending today</h1>
      <ListFilms films={films} />

      {loading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
