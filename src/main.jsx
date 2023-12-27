import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';
import { NotificationContextProvider } from './context/NotificationContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './context/UserContext';
import { Toaster } from './components/ui/toaster.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <NotificationContextProvider>
      <UserContextProvider>
        <App />
        <Toaster />
      </UserContextProvider>
    </NotificationContextProvider>
  </QueryClientProvider>
);
