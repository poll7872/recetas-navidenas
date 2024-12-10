import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
