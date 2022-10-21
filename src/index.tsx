import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';
import GlobalStyle from './styles/GlobalStyles';
import { worker } from './mocks/worker';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>,
);
