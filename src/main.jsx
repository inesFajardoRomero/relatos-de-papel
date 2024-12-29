import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import {RouteLanding} from "./Routes/RouteLanding.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <RouteLanding />
      </BrowserRouter>
  </StrictMode>
)
