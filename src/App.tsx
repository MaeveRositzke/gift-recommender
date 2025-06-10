import NavBar from './components/NavBar.tsx'
import './App.css'
import {Route, Router} from "react-router";

function App() {

  return (
    <>
      <div>
          <Router>
              <NavBar ></NavBar>
              <Route path="/" element={<App />} />
              <Route path="/profile" element={Profile}/>

          </Router>
      </div>
    </>
  )
}

export default App
