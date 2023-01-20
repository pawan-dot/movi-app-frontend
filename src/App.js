
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import MoviList from './Components/MoviList';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<MoviList />} />
        </Routes>
      </HashRouter>

    </>

  );
}

export default App;
