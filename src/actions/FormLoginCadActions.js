import firebase from 'firebase'

export const modifyName = (e) => {
    return {
        type: 'MODIFY_NAME',
        payload: e.target.value
    }
}

export const modifyEmail = (e) => {
    return {
        type: 'MODIFY_EMAIL',
        payload: e.target.value
    }
}
export const modifyPassword = (e) => {
    return {
        type: 'MODIFY_PASSWORD',
        payload: e.target.value
    }
}

export const saveLogin = (name, email, password) => {

    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => saveLoginSucess(dispatch))
            .catch(error => saveLoginError(error,dispatch))
    }
}

const saveLoginSucess = (dispatch) => {
    dispatch({type: 'Sucess'})
}

const saveLoginError = (error, dispatch) => {
    dispatch({type: 'CAD_LOGIN_ERROR', payload: error.message})
}