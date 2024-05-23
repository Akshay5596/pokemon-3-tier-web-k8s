import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.49.2:30001';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
