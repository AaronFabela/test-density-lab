import './App.css'
import CommentsPage from './pages/CommentsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateComment from './pages/UpdateComment'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CommentsPage />} />
          <Route exact path='/update/:id' element={<UpdateComment />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
