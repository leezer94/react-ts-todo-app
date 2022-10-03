import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 90%;
  height: 2em;
  border-radius: 1em;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const HomeLink = styled.a`
  color: black;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 230px;
  min-width: 230px;
`;

export { Header, HomeLink, Title, Nav, InputContainer, Input };
