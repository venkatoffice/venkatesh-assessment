import React, { Suspense, useContext } from 'react'
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StoreProvider from './Store/provider';
import Loader from './Molecules/Loader';
const Theaters = React.lazy(() => import('./Pages/Theaters'))
function App() {
  return (
    <HashRouter>
    <StoreProvider>
      <Suspense fallback={Loader}>
       <Routes>
          <Route  key='movie' path='/' element={<Theaters />} />
       </Routes>
      </Suspense>
    </StoreProvider>

   </HashRouter>
  );
}

export default App;
