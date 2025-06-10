import Profile from "./components/Profile";
import Home from "./components/Home";
import "./App.css";
import {Route, Routes} from "react-router";

function App() {

  return (
    <>
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />}/>
          </Routes>
      </div>
    </>
  )
}

export default App;