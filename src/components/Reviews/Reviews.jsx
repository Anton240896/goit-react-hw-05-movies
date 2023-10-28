import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestReviews } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import {
  ListReview,
  UnOrderedReviews,
} from 'components/Reviews/Reviews.styled';

/*   ====== HOOKS ======*/
const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  /*   ====== FETCH REQUEST ======*/

  useEffect(() => {
    const getReviews = () => {
      setLoading(true);

      requestReviews(movieId)
        .then(resp => {
          setReviews(resp);
        })
        .catch(error => {})
        .finally(() => {
          setLoading(false);
        });
    };
    getReviews();
  }, [movieId]);

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
      {reviews.length === 0 && <div>Sorry, we didn't find any comments</div>}
    </div>
  );
};

export default Reviews;
