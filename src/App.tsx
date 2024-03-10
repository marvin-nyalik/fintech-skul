import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

export function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export const WrappedApp = () =>{
  return (
    <>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </>
  )
}
