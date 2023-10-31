import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { requestReviews } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';

import {
  ListReview,
  UnOrderedReviews,
  MessageNoComments,
} from 'components/Reviews/Reviews.styled';

/*   ====== HOOKS ======*/
const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  /*   ====== FETCH REQUEST ======*/

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await requestReviews(movieId);
        setReviews(data);
      } catch (error) {
        toast.error('Sorry, we didnt find anything');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  // useEffect(() => {
  //   const getReviews = () => {
  //     setLoading(true);

  //     requestReviews(movieId)
  //       .then(resp => {
  //         setReviews(resp);
  //       })
  //       .catch(error => {})
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };
  //   getReviews();
  // }, [movieId]);

  /*   ====== RENDER ======*/
  return (
    <div>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <UnOrderedReviews>
            {reviews.map(review => (
              <ListReview key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </ListReview>
            ))}
          </UnOrderedReviews>
        </div>
      )}
      {reviews.length === 0 && (
        <MessageNoComments>
          ❌ Sorry, we didn't find any comments
        </MessageNoComments>
      )}
    </div>
  );
};

export default Reviews;
