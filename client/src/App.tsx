import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Basket from "./pages/Basket";
import History from "./pages/History/History";
import Header from "./components/Header/Header";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <div className='App container'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/:id' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
