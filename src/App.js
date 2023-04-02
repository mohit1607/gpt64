import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './Components/HomePage';
import { Provider } from 'react-redux';
import Store from './store/store';


function App() {
  return (
    <Provider store={Store} >
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
      </Routes>
    </Provider>
  );
}

export default App;
