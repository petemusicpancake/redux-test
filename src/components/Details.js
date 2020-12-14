import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchUsers} from '../store/actions/usersAction'

function Details() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const url = `https://api.github.com/users/${id}`
  useEffect(() => {
    dispatch(fetchUsers(url));
  }, [id])
  const state = useSelector(state => state.usersReducer.users)
  console.log(state);
  return (
    <div className="details">
    </div>
  );
}

export default Details;
