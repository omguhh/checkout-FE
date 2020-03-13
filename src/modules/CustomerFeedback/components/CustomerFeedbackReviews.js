import React, {PureComponent} from "react";

class CustomerFeedbackReviews extends PureComponent {

    render() {

        const reviews = this.props.data.map(function(review) {
            return  <li className={"reviews__item"}>
                <h4 className={"reviews__header"}>{review.name}</h4>
                <p className={"reviews__paragraph"}>{review.feedback}</p>
                <small>{review.date}</small>
            </li>
        });

        return (
            <div className={"customerFeedback__reviews"}>
                <div className={"customerFeedback__reviews__content"}>
                    <h3>See what other people are saying ({this.props.data.length} reviews)</h3>
                    <ul className={"reviews__container"}>
                        {reviews}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CustomerFeedbackReviews;
