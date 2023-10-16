import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import listBurger from "./assets/listburgericon.svg";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="app">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Content showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}

export default App;
