import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {RouteLanding} from "./Routes/RouteLanding.jsx";
import { AppProvider } from './context/AppProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AppProvider>
      <BrowserRouter>
          <RouteLanding />
        </BrowserRouter>
     </AppProvider>
      
  </StrictMode>
)
