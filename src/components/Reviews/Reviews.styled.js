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
  color: red;
  padding: 10px;
  margin-top: 14px;
  font-family: 'Marck Script';
`;

export const MessageNoComments = styled.div`
  color: red;
  margin-top: 17px;
  font-family: 'Marck Script';
`;

export const TextAutor = styled.p`
  max-width: 994px;
  font-family: 'Marck Script';
`;
