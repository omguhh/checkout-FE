import React, {PureComponent} from "react";

class CustomerFeedbackReviews extends PureComponent {

    render() {
        return (
            <div className={"customerFeedback__reviews"}>
                <div className={"customerFeedback__reviews__content"}>
                    <h3>See what other people are saying (38 reviews)</h3>
                    <ul className={"reviews__container"}>
                        <li className={"reviews__item"}>
                            <h4 className={"reviews__header"}>Paul Newman</h4>
                            <p className={"reviews__paragraph"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <small>May 20, 2020</small>
                        </li>
                        <li className={"reviews__item"}>
                            <h4 className={"reviews__header"}>Paul Newman</h4>
                            <p className={"reviews__paragraph"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <small>May 20, 2020</small>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CustomerFeedbackReviews;
