import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Transactions from './pages/Transactions'

const credits = [
  { name: 'Alice', date: '2024-12-01', amount: 50.25 },
  { name: 'Bob', date: '2024-12-03', amount: 75.0 },
  { name: 'Charlie', date: '2024-12-05', amount: 100.5 },
];

const debts = [
  { name: 'Alice', date: '2024-12-01', amount: 50.25 },
  { name: 'Bob', date: '2024-12-03', amount: 75.0 },
  { name: 'Charlie', date: '2024-12-05', amount: 100.5 },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/sign_in' element={<Login />} />
        <Route path='/' element={<Home credit={100} debt={200} />} />
        <Route path='/credits' element={<Transactions transactions={credits} />} />
        <Route path='/debts' element={<Transactions transactions={debts} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
