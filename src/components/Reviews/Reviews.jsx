import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestReviews } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { ListReview } from './Reviews.styled';
import toast, { Toaster } from 'react-hot-toast';

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
        .catch(error => {
          toast.error('Sorry, we dint find, please try again');
        })
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
      <Toaster position="top-right" />

      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <ListReview key={review.author}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
              </ListReview>
            );
          })}
        </ul>
      ) : (
        toast('Sorry, but we found nothing', {
          duration: 3000,
        })
      )}
    </div>
  );
};

export default Reviews;
