export const modifyYourName = (e) => {
    return {
        type: 'MODIFY_YOURNAME',
        payload: e.target.value
    }
}

export const modifyYourBio = (e) => {
    return {
        type: 'MODIFY_YOURBIO',
        payload: e.target.value
    }
}

export const modifyPrimarySkill = (e) => {
    return {
        type: 'MODIFY_PRIMARY_SKILL',
        payload: e.target.value
    }
}

export const modifyJSLib = (e) => {
    return {
        type: 'MODIFY_JAVASCRIPT_LIBRARY',
        payload: e.target.value
    }
}

export const modifyTdd = (e) => {
    return {
        type: 'MODIFY_TDD',
        payload: e.target.checked
    }
}

export const modifyHeroku = (e) => {
    return {
        type: 'MODIFY_HEROKU',
        payload: e.target.checked
    }
}

export const modifyGithub = (e) => {
    return {
        type: 'MODIFY_GITHUB',
        payload: e.target.checked
    }
}

export const modifyStartDate = (e) => {
    return {
        type: 'MODIFY_START_DATE',
        payload: e.target.value
    }
}
