import React from 'react';
import styled from 'styled-components';

const StatisticsContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
`;
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsContainer>
    <Label>
      Good: <Value>{good}</Value>
    </Label>
    <Label>
      Neutral: <Value>{neutral}</Value>
    </Label>
    <Label>
      Bad: <Value>{bad}</Value>
    </Label>
    <Label>
      Total reviews: <Value>{total}</Value>
    </Label>
    <Label>
      Percentage of positive reviews: <Value>{positivePercentage}%</Value>
    </Label>
  </StatisticsContainer>
);
export default Statistics;
