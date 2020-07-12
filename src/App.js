import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const api = "https://api.github.com/users/Nirmal201";
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(api).then((res) => setData(res.data));
  }, []);

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="App">
      <Navbar openNav={openNav} handleNav={handleNav} />
      <Main data={data} />
    </div>
  );
}

export default App;
