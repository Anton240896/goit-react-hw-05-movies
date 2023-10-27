import React, { useEffect, useState } from 'react';
import ListFilms from 'components/ListFilms/ListFilms';
import { ContFilms } from 'pages/Home/Home.styled';
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
        toast.error('🥺 Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };

    getRequestTrending();
  }, []);

  /*   ====== RENDER ======*/
  return (
    <ContFilms>
      <h1>Trending today</h1>
      <ListFilms films={films} />

      {loading && <Loader />}
      <Toaster position="top-right" />
    </ContFilms>
  );
};

export default Home;
