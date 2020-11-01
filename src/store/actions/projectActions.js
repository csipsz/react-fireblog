export const createProject = (project) => {
    return (dispatch, getState, {getFireBase, getFireStore}) => {
        dispatch({type: 'CREATE_PROJECT', project})
    }
}