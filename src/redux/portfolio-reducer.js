const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';

let initialState = {
    arts: [
        {
            id: 'Qew23FSAsds',
            title: 'HelloBob',
            imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133'
        },
        {
            id: 'qweEEwew',
            title: 'Heqqq',
            imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775'
        },
        {
            id: 'qweEE123ds',
            title: 'Hegg',
            imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/345/289/large/vlx-zvarun-adam-break.jpg?1594205477'
        }
    ],
    isFetching: false
};

const portfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_IN_PROGRESS:{
            return {...state, isFetching: action.isFetching}
        } 
    }
    return state;
};

export default portfolioReducer;

let mapDispatchToPrors = (dispatch) =>{
    return {
        toogleIsFetching: (isFetching) =>{
            dispatch(toggleFetchingAC(isFetching));
        }
    }
}

export const toggleFetchingAC = (isFetching) => ({type: FETCH_IN_PROGRESS, isFetching});