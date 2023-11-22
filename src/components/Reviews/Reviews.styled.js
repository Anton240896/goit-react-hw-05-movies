import styled from 'styled-components';

export const UnOrderedReviews = styled.ul`
  max-width: 1078px;
  margin-left: -776px;
  margin-top: 149px;

  @media (max-width: 922px) {
    margin-left: -193px;
  }
`;

export const ListReview = styled.li`
  list-style: none;
  color: red;
  border: 1px grey solid;
  padding: 10px;
`;

export const MessageNoComments = styled.div`
  color: red;
  margin-top: 10px;
`;

export const TextAutor = styled.p`
  max-width: 994px;
`;
