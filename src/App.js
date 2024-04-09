import logo from './logo.svg';
import './App.css';
import CounterPage from './Pages/CounterPage/CounterPage'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CounterPage />} />
    </Routes>
  );
}

export default App;
