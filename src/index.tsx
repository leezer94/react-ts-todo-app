import { createRoot } from 'react-dom/client';

import App from './App';
import GlobalStyle from './styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
