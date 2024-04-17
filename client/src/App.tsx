import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Basket from "./pages/Basket";
import History from "./pages/History/History";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App container'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
