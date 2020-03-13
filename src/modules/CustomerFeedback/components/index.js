import React, {Fragment, PureComponent} from "react";
import CustomerFeedbackForm from './CustomerFeedbackForm';
import CustomerFeedbackReviews from './CustomerFeedbackReviews';
import CustomerFeedbackHeader from './CustomerFeedbackHeader';
import { connect } from 'react-redux';
import {getReviews} from "../service";

class CustomerFeedback extends PureComponent {

    componentDidMount() {
        this.props.getReviews();
    }

    render() {
        return (
            <Fragment>
                <CustomerFeedbackHeader/>
                <CustomerFeedbackForm/>
                <CustomerFeedbackReviews data={this.props.reviews.data}/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ReviewModule}) => ({
    reviews:  {
        data: ReviewModule.reviews.data,
        loaded: ReviewModule.reviews.loaded,
        loading: ReviewModule.reviews.loading,
        error: ReviewModule.reviews.error
    },
    review:  {
        data: ReviewModule.review.data,
        loaded: ReviewModule.review.loaded,
        loading: ReviewModule.review.loading,
        error: ReviewModule.review.error
    },

});

const mapDispatchToProps = (dispatch) => ({
    getReviews: () => getReviews()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFeedback);
