import React, {PureComponent} from "react";
import CustomerFeedBackCoinFlip from "./CustomerFeedbackCoinFlip";

class CustomerFeedbackForm extends PureComponent {
    render() {
        return (
            <div className={'customerFeedback__form__layout'}>
                <div className={'customerFeedback__form__container'}>
                    <div className={"customerFeedback__form__item"}>
                        <h3>Want to tell us something?</h3>
                        <div>
                            <label className={"input__label"}> Name </label>
                            <input className={"input"} type={"text"} placeholder={"Name"}/>
                            <label className={"input__label"}> Email </label>
                            <input className={"input"} type={"email"} placeholder={"Email"}/>
                            <label className={"input__label"}> Feedback </label>
                            <textarea className={"input"} type={"textarea"} placeholder={"Feedback"}/>
                            <button className={"button button--submit"}>Submit your review</button>
                        </div>
                    </div>
                    <div className={"customerFeedback__form__divider"} />
                    <div className={"customerFeedback__form__item"}>
                        <CustomerFeedBackCoinFlip/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerFeedbackForm;
