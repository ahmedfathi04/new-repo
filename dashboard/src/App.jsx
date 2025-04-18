import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";



function App() {
  return (
  <dev className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    
    {/* BG*/}
    <dev className = 'fixed insent-0 z-0'>
      <dev className = 'absolute insent-0 bg-grediant-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
      <dev className = 'absolute insent-0 background-blur-sm' />
      
    </dev>
    

      <Sidebar />
      <Routers>
        <Route path="/" element={<OverviewPage />} /> 
        <Route path="/products" element={<ProductsPage />} /> 
      </Routers>
    
  </dev>
  );
}

export default App
