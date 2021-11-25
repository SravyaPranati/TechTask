import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/welcome" component={WelcomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
