import axios from 'axios';

export function loginHandler(data) {
    return dispatch => {
      dispatch({
        type: 'LOGIN_PENDING',
      });
      axios
        .post("http://192.168.1.100:8000/users/api/auth/login", data)
        .then(res => {
          dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
        })
        .catch(err => {
          dispatch({
            type: 'LOGIN_REJECTED',
            payload: err,
          });
        });
    };
  }
  export function logoutHandler() {
    return dispatch => {
      dispatch({type: 'LOGOUT'});
    };
  }