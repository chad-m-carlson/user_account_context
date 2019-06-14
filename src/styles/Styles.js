import styled from 'styled-components';

export const Grid = styled.div`
  display: flex !important;
  justify-content: space-between;
  width: 85vw;
  flex-wrap: wrap;
  margin: 20px;
`;

export const StyledButton = styled.button`
    background: #312d2d;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  width: 150px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
`;