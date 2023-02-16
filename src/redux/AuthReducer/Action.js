import axios from 'axios'
import { CREATE_FAILIUR, CREATE_REQUEST, CREATE_SUCCESS } from './Action.type'


export const Registers = (data) => dispatch => {
    dispatch({ type: CREATE_REQUEST })
    axios.post("https://new-mock-api-2.onrender.com/users",data)
      .then((response) => {
        dispatch({ type: CREATE_SUCCESS, payload: response.data})
        console.log(response.data)
      }).catch((e) => {
        dispatch({ type: CREATE_FAILIUR})
        console.log(e)
      })
  }