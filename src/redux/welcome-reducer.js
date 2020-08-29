const FINISH_PRELOAD_LOGO = 'FINISH_PRELOAD_LOGO';
const PRELOAD_LOGO_HIDDEN = 'PRELOAD_LOGO_HIDDEN';

let initialState = {
    preloadFinished: false,
    preloadLogoHidden: false
}

const welcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FINISH_PRELOAD_LOGO: {
            return { ...state, preloadFinished: true };
        }
        case PRELOAD_LOGO_HIDDEN: {
            return { ...state, preloadLogoHidden: true }
        }
    }

    return state;
}

export default welcomeReducer;

export const finishPreloadLogoAC = (preloadingStartedAt) => {
    return ({ type: FINISH_PRELOAD_LOGO, preloadingStartedAt });
}

export const logoHidden = () => {
    return { type: PRELOAD_LOGO_HIDDEN }
}