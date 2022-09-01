import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import addReview from "./components/addReview";
import movie from "./components/movie";
import moviesList from "./components/moviesList";
import login from "./components/login";
import NavBar from "./components/navBar";

function App() {
  return <NavBar />;
}

export default App;
