import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
`;

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;
  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;
