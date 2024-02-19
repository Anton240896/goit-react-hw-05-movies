import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import ListFilms from 'components/ListFilms/ListFilms';
import { KievTime } from 'components/Layout/Layout.styled';
import { ContFilms, Trending, Description, Span } from 'pages/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';

import { requestTrending } from 'components/Api/Api';

const Home = () => {
  /*   ====== HOOKS ======*/
  const [films, setFilms] = useState([]);
  const [nowTime, setNowTime] = useState(new Date());
  const [loading, setLoading] = useState(false);

  /*   ====== REQUEST FILMS TRENDING ======*/
  useEffect(() => {
    const getRequestTrending = async () => {
      setLoading(true);
      try {
        const trendingFilms = await requestTrending();
        setFilms(trendingFilms);
      } catch (error) {
        toast.error(' Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };

    getRequestTrending();
    setInterval(() => setNowTime(new Date()));
  }, []);

  /*   ====== RENDER ======*/
  return (
    <ContFilms>
      <Description>
        Welcome to Movie DB application : <Span>Description</Span>
        <Span>Trailer</Span>
        <Span>Actors</Span>
        <Span>Reviews</Span>
      </Description>
      <Trending>Trending today :</Trending>

      <KievTime>
        <b> Kyiv time • {nowTime.toLocaleTimeString()}</b>
      </KievTime>

      <ListFilms films={films} />

      {loading && <Loader />}
      <Toaster position="top-right" />
    </ContFilms>
  );
};

export default Home;
