import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/usersAction";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./components/Details";
import HomePage from './components/HomePage'

function App() {
  const url = 'https://api.github.com/users'
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(url));
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Route path="/details/:id" component={Details} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
