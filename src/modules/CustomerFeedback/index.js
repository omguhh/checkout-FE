import React, {Fragment, PureComponent} from "react";
import CustomerFeedbackForm from './CustomerFeedbackForm';
import CustomerFeedbackReviews from './CustomerFeedbackReviews';
import CustomerFeedbackHeader from './CustomerFeedbackHeader';

class CustomerFeedback extends PureComponent {
    render() {
        return (
            <Fragment>
                <CustomerFeedbackHeader/>
                <CustomerFeedbackForm/>
                <CustomerFeedbackReviews/>
            </Fragment>
        )
    }
}

export default CustomerFeedback;
