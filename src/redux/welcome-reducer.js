const FINISH_PRELOAD_LOGO = 'FINISH_PRELOAD_LOGO';

let initialState = {
    preloadFinished: false,
}

const welcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FINISH_PRELOAD_LOGO: {
            return { preloadFinished: true };
        }
    }

    return state;
}

export default welcomeReducer;

export const finishPreloadLogoAC = (preloadingStartedAt) => {
    return ({ type: FINISH_PRELOAD_LOGO, preloadingStartedAt });
}