import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #272525;
  border-radius: 5px;
  border: none;
`;

const GoodButton = styled(Button)`
  background-color: #4caf50;
`;
const NeutralButton = styled(Button)`
  background-color: #ffd700;
`;

const BadButton = styled(Button)`
  background-color: #ff6347;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(option => {
      const ButtonComponent =
        option === 'good'
          ? GoodButton
          : option === 'neutral'
          ? NeutralButton
          : BadButton;

      return (
        <ButtonComponent key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonComponent>
      );
    })}
  </Container>
);

export default FeedbackOptions;
