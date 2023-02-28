import { child, get } from 'firebase/database'
import React, { useReducer } from 'react';
import { dbref } from '../../../firebase';
import UserContext from './UserContext';
import UserReducer from './UserReducer'

const UserState = (props) => {
  const intialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, intialState)

  const getUsers = async () => {
    let res
    await get(child(dbref, '/users')).then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val()
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
      console.error(error)
    })
    dispatch({
      type: 'GET_USERS',
      payload: res
    })
  }

  const getProfile = async (id) => {
    let res
    await get(child(dbref, '/users/' + id)).then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val()
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
      console.error(error)
    })//Obtener un unico usuario por id
    dispatch({
      type: 'GET_PROFILE',
      payload: res
    })
  }

  return (
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
