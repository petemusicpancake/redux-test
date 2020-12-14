import React from "react";
import "./UsersSelected.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteUser } from "../store/actions/usersAction";

function UsersSelected() {
  const dispatch = useDispatch();
  const { selected } = useSelector(({ usersReducer }) => ({
    selected: usersReducer.selected,
  }));
  return (
    <div className="usersSelected">
      {selected.map((selected) => (
        <div key={selected.id * Math.random()} className="selected">
          <h3>{selected.login}</h3>
          <Button
            onClick={() => dispatch(deleteUser(selected.id))}
            variant="contained"
          >
            <DeleteForeverIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default UsersSelected;
