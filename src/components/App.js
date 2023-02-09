import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
