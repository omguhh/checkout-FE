import { REVIEW_COMPONENT } from './../actions';
import reviews from "./../dummy-reviews.json";
const{REVIEWS, REVIEW} = REVIEW_COMPONENT;


const getReviews = () => (dispatch) => {
    dispatch({type: REVIEWS.LOADED, payload: reviews.reviews })
};

const createReview = (params) => (dispatch) => {
    dispatch({type: REVIEW.CREATED, payload: params })
};

export {
    getReviews,
    createReview
}