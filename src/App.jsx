import './App.css'
import { CodeSharingApp } from './components/CodeSharingApp'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


  return (
      <Router>
        <Routes>
         <Route path="/" element={<CodeSharingApp />} />
          <Route path=":linkId" element={<CodeSharingApp/>} />
        </Routes>
      </Router>
  )
}

export default App
