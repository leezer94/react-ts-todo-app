import styled from 'styled-components';

const Form = styled.form``;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  font-size: 1rem;
  font-weight: 400;
  line-height: inherit;
  width: 100%;
  height: auto;
  padding: 0.75rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  background: #f1f5f9;
`;

const Button = styled.button`
  font-size: 1rem;
  line-height: inherit;
  cursor: pointer;
  min-width: 90px;
  height: auto;
  padding: 0.65rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 2rem;

  background-color: rgb(5, 150, 105);
  margin-left: 0.5rem;
`;

export { Form, FormContainer, Input, Button };
