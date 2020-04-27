import React from "react";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";
import "./w3.css";

import UserContext from "./UserContext";

const App = () => {
  const userName = `User_${Math.trunc(Math.random() * 10000000)}`;

  return (
    <UserContext.Provider value={{ userName: userName }}>
      <div className="App">
        <AppRoutes />
      </div>
    </UserContext.Provider>
  );
};

export default App;
