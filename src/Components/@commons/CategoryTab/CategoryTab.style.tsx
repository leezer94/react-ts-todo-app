import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  width: 110px;
  letter-spacing: 3px;
  text-align: center;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
`;

const Close = styled.span`
  visibility: hidden;
  position: relative;
  left: 35px;
  bottom: 14px;
  width: 10px;
  height: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  margin-left: -10px;

  ${Button}:hover & {
    visibility: visible;
    cursor: pointer;
  }
`;

export { Button, Close };
