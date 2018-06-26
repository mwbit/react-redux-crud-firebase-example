const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    errorCad: '',

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MODIFY_NAME':
            return { ...state, name: action.payload }
            break
        case 'MODIFY_EMAIL':
            return { ...state, email: action.payload }
            break
        case 'MODIFY_PASSWORD':
            return { ...state, password: action.payload }
            break
        case 'CAD_LOGIN_ERROR':
            return { ...state, errorCad: action.payload }
            break
        default:
            return state
    }

}
