import Profile from "./components/Profile";
import Home from "./components/Home";
import "./App.css";
import {Route, Routes} from "react-router";
import {useState} from "react";
import SignUp from "./components/SignUp";

function App() {

    return (
        <>
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />}/>
                  <Route path="/signup" element={<SignUp />}/>
              </Routes>
          </div>
        </>
    )
}

export default App;