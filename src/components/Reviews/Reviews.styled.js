import styled from 'styled-components';

export const UnOrderedReviews = styled.ul`
  max-width: 1078px;
  margin-left: -776px;
  margin-top: 149px;

  @media (max-width: 1220px) {
    margin-left: -85px;
  }
`;

export const ListReview = styled.li`
  list-style: none;
  color: red;
  border: thick double red;
  padding: 10px;
`;

export const MessageNoComments = styled.div`
  color: red;
  margin-top: 17px;
`;

export const TextAutor = styled.p`
  max-width: 994px;
`;
