import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Basket from "./pages/Basket";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App container'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
