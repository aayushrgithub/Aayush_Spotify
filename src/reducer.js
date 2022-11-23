export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished after developing.
    //token: 'BQDZKkJTSbidKOsDDcOXlJUFuKUs3OJZtdePtJF5AZpMcBkylNYa2PuN4mFZ-jCJ3IVpnWoIpmIRYEspGD6JppNh_zfXCLL4-Cm4AMOJWrBG4kFPGrlA4qkP89A_l4TyspRomXJpp-cUykTkIgE0QdcleBOLpy4xTIa2797gNX58jICC5AlSr5QGCLC9k_pRz_iopHGc5C8Eb6uH7P1s'
};

const reducer = (state, action) => {
    console.log(action);

    //Action => type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;