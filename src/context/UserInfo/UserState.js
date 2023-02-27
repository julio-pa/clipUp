import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer'

const UserState = (props) => {
  const intialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer,intialState)

  const getUsers = async () => { 
    const res = await d //hacer llamada a la API
    dispatch({
      type: 'GET_USERS',
      payload: res.data
    })
  }

  const getProfile = async (id) => {
    const res = await d //Obtener un unico usuario por id
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data
    })
   }

  return(
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
