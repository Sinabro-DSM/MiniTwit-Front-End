import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import User from "./components/profile/User";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <User />
    </div>
  );
}

export default App;
