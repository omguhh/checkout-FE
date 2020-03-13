import React, { PureComponent} from "react";
import CustomerFeedbackList from "./CustomerFeedbackList";

class CustomerFeedbackHeader extends PureComponent {

    render() {
        return  (
        <div className={'customerFeedback__header'}>
            <div className={'customerFeedback__header__content'}>
                <h1 className={'customerFeedback__header__title'}>  What are customers saying about us? </h1>
                <p className={'customerFeedback__header__caption'}>
                    From day one we've built this product with the customer in mind and we'd like to keep it that way.
                    We've also curated a list of clients who've had positive experiences with us.
                </p>
            </div>
            <CustomerFeedbackList/>
        </div>
        )
    }
}

export default CustomerFeedbackHeader;
