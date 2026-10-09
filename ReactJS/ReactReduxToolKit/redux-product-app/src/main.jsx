import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // we need to provide redux store to entire store using the provider */}
    <Provider store={store}>    
      <App />
    </Provider>
  </StrictMode>,
)
