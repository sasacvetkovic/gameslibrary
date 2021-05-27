import React from "react";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Pages and components
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
