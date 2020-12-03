import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ComponentMenu from "./components/ComponentMenu";
import ComponentFooter from "./components/ComponentFooter";
import ComponentRouters from './components/ComponentRouters';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <ComponentMenu />
        <ComponentRouters />
        <ComponentFooter />
      </div>
    </BrowserRouter>
  )
}

export default App;
