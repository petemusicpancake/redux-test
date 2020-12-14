import React from "react";
import "./Users.css";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch } from "react-redux";
import { selectUsers } from "../store/actions/usersAction";
import { Link, useParams } from "react-router-dom";

function Users({ user, username }) {

  const dispatch = useDispatch();
  const btn = {
    backgroundColor: "#2ECC71",
    color: "#fff",
  };
  const selectUser = () => {
    return dispatch(selectUsers(user));
  };
  return (
    <div className="user">
      <Link to={`/details/${user.id}`}>
        <h3>{username}</h3>
      </Link>
      <Button style={btn} onClick={selectUser} variant="contained">
        <CheckIcon />
      </Button>
    </div>
  );
}

export default Users;
