const INITIAL_STATE = {
    yourName: '',
    yourBio: '',
    primarySkill: '',
    javaScriptLibrary: '',
    tdd: false,
    heroku: false,
    github: false,
    startDate: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MODIFY_YOURNAME':
            return {...state,yourName: action.payload}
            break
        case 'MODIFY_YOURBIO':
            return {...state,yourBio: action.payload}
            break
        case 'MODIFY_PRIMARY_SKILL':
            return {...state,primarySkill: action.payload}
            break
        case 'MODIFY_JAVASCRIPT_LIBRARY':
            return {...state,javaScriptLibrary: action.payload}
            break
        case 'MODIFY_TDD':
            return {...state,tdd: action.payload}
            break
        case 'MODIFY_HEROKU':
            return {...state,heroku: action.payload}
            break
        case 'MODIFY_GITHUB':
            return {...state,github: action.payload}
            break
        case 'MODIFY_START_DATE':
            return {...state,startDate: action.payload}
            break
        default:
            return state
    }
    
}
                