import styled from 'styled-components';

export const UnOrderedReviews = styled.ul`
  max-width: 1078px;
  margin-left: -776px;
  margin-top: 185px;

  @media (max-width: 1220px) {
    margin-left: -64px;
  }
`;

export const ListReview = styled.li`
  list-style: none;
  color: var(--tmdbRed);
  padding: 10px;
  margin-top: 14px;
  font-family: 'Marck Script';
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const MessageNoComments = styled.div`
  color: var(--tmdbRed);
  margin-top: 42px;
  font-family: 'Marck Script';
  font-size: 20px;
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;

export const TextAutor = styled.p`
  max-width: 994px;
  font-family: 'Marck Script';
  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms
    both;
`;
