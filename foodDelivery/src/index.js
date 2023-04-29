import ReactDOM from 'react-dom/client';
import { GlobalProvider } from "./components/context/GlobalState";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GlobalProvider>
    <App />
</GlobalProvider>

);
