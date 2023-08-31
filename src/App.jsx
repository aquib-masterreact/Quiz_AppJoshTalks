
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import QUizPage from './pages/QUizPage'
import ResultPage from './pages/ResultPage'
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizProvider } from './context/QuizContext'



function App() {
  

  return (
    <>
      
        <QuizProvider>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Quiz' element={<QUizPage />}/>
        <Route path='/result' element={<ResultPage/>}/>
        </Routes>
        </QuizProvider>
        
        
        
      
    </>
  )
}

export default App
