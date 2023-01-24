import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

const app = document.getElementById('root');
const root = createRoot(app);
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
