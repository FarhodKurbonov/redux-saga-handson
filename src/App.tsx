import React from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {USER_POSTS_FETCH_REQUESTED} from "./store/actions";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    })
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    })
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    })
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    })
  }

  return (
    <div className="App">
      <Button onClick={handleClick}>
        Get Posts
      </Button>
    </div>
  );
}

export default App;
