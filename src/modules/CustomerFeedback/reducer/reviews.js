import { REVIEW_COMPONENT } from './../actions';
const{REVIEWS, REVIEW} = REVIEW_COMPONENT;

const initialState = {
    reviews: {
        loading: false,
        loaded: false,
        error: null,
        data: []
    },
    review: {
        created: false,
        creating: false,
        error: null,
        data: []
    }
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case REVIEWS.LOADING: {
            return {
                ...state,
                reviews: {
                    loading: true,
                    loaded: false,
                    error: null
                }
            };
        }
        case REVIEWS.LOADED: {
            return {
                ...state,
                reviews: {
                    loading: false,
                    loaded: true,
                    error: null,
                    data: payload
                }
            };
        }
        case REVIEWS.ERROR: {
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    loading: false,
                    loaded: true,
                    error: payload,
                }
            }
        }

        case REVIEW.CREATING: {
            return {
                ...state,
                review: {
                    ...state.review,
                    created: false,
                    creating: false
                }
            };
        }
        case REVIEW.CREATED: {
            return {
                reviews: {
                    ...state.reviews,
                    data: [payload, ...state.reviews.data]
                },
                review: {
                    ...state.review,
                    created: true,
                    creating: false,
                    error: null,
                    data: payload
                }
            };
        }
        case REVIEW.ERROR: {
            return {
                ...state,
                review: {
                    ...state.review,
                    loaded: false,
                    loading: false,
                    error: payload
                }
            };
        }
        default:
            return state;
    }
};


