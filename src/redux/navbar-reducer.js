const CHANGE_NAV_BAR_OPEN_STATE = 'CHANGE_NAV_BAR_OPEN_STATE';

let initialState = {
    navbarOpened: false
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAV_BAR_OPEN_STATE: {
            return { ...state, navbarOpened: !state.navbarOpened }
        }
    }

    return state;
};

export default navbarReducer;

export const navbarChangeOpenState = () => {
    return { type: CHANGE_NAV_BAR_OPEN_STATE };
}