import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
  font-size: 20px;
  padding: 5px 15px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: #66f5ff;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
