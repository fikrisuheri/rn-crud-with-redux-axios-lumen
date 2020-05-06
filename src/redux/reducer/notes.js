const initialState = {
    isLoading:false,
    isFulfilled :false,
    isRejected:false,
    notes:[],

}

const Notes = (state = initialState,action) => {
    switch (action.type) {
        case 'GET_NOTES_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected:false,
                isFulfilled:false,
            };
        case 'GET_NOTES_REJECTED' :
            return {
                ...state,
                isLoading:false,
                isRejected:true
            }
        case 'GET_NOTES_FULFILLED' :
            return {
                ...state,
                isLoading:false,
                isFulfilled:true,
                isRejected:false,
                notes:action.payload.data.results
            }
        default:
            return state;
    }
}

export default Notes;