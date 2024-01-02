import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './context/UserContext';
import { Toaster } from './components/ui/toaster.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster />
    </UserContextProvider>
  </QueryClientProvider>
);
