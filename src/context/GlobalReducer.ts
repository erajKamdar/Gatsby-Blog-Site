export const Reducer = (state, action) => {
    switch(action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                loginModal: true
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                loginModal: false
            }
        case "LOGIN":
            return {
                ...state,
                authenticated: true,
                user : action.payload.user
            }
        case "LOGOUT":
            return {
                ...state,
                authenticated: false,
                user : {}
            }
        default:
            return state
    }
}