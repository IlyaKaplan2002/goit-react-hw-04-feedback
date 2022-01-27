import styled from 'styled-components';

const FeedbackOptionsStyled = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border-radius: 5px;
  }

  button:hover {
    background-color: blue;
    color: white;
  }

  li:not(:last-child) {
    margin-right: 20px;
  }
`;

export default FeedbackOptionsStyled;
