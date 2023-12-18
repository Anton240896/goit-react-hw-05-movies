import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import ListFilms from 'components/ListFilms/ListFilms';
import { ContFilms, Trending, Description } from 'pages/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';

import { requestTrending } from 'components/Api/Api';

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
        if (requestTrending.lenght > 0) {
          toast.success('We find films');
        }
        setFilms(trendingFilms);
      } catch (error) {
        toast.error(' Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };

    getRequestTrending();
  }, []);

  /*   ====== RENDER ======*/
  return (
    <ContFilms>
      <Description>
        Welcome to Movie DB description ·<div>Plot</div>
        <div>Actors</div>
        <div>Reviews</div>
      </Description>
      <Trending>Trending today</Trending>
      <ListFilms films={films} />

      {loading && <Loader />}
      <Toaster position="top-right" />
    </ContFilms>
  );
};

export default Home;
