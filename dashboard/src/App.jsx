import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";




function App() {
  return (
  <dev className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    
    {/* BG*/}
    <div className = 'fixed insent-0 z-0'>
      <dev className = 'absolute insent-0 bg-grediant-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
      <dev className = 'absolute insent-0 background-blur-sm' />
      
    </div>  
    

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} /> 
        <Route path="/products" element={<ProductsPage />} /> 
      </Routes>
    
  </dev>
  );
}

export default App
