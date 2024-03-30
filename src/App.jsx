import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Regions from './pages/Regions';
import NotFound from './pages/NotFound';
import HomeLayout from './layouts/HomeLayout';
import OtherLayouts from './layouts/OtherLayouts';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';


const App = () => {
  return (
    <div>
    <div>
      <NavBar />
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
        />
        <Route path="/regions" element={
          <OtherLayouts>
            <Regions />
          </OtherLayouts>
        }
        />
        <Route path="*" element={
          <OtherLayouts>
            <NotFound />
          </OtherLayouts>
        }
        />
      </Routes>
    </BrowserRouter>

    <Pagination>
      divicion
    </Pagination>
    </div>
  );
}

export default App