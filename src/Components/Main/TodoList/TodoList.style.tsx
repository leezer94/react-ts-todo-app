import styled from 'styled-components';

const Ul = styled.ul`
  margin-top: 0.75rem;
  padding-left: 0px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-bottom: 0.625rem;
`;

const TaskButton = styled.button`
  background-color: rgb(249, 250, 251);
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-right: 0.25rem;
`;

const DeleteButton = styled.button`
  background-color: rgb(249, 250, 251);
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export { Ul, Li, TaskButton, DeleteButton };
