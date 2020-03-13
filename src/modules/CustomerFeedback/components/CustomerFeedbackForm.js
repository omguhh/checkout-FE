import React, {PureComponent} from "react";
import CustomerFeedBackCoinFlip from "./CustomerFeedbackCoinFlip";
import {connect} from "react-redux";
import {createReview} from "../service";
import moment from 'moment';

class CustomerFeedbackForm extends PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            feedback: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.createReview({
            name: this.state.name,
            email: this.state.email,
            feedback: this.state.feedback,
            date: moment().format('DD/MM/YYYY')
        })
    }

    handleChange(field, value, ) {
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div className={'customerFeedback__form__layout'}>
                <div className={'customerFeedback__form__container'}>
                    <div className={"customerFeedback__form__item"}>
                        <h3>Want to tell us something?</h3>
                        <div>
                            <label className={"input__label"}> Name </label>
                            <input className={"input"} type={"text"} placeholder={"Name"}  onChange={(event) => this.handleChange('name', event.target.value)}/>
                            <label className={"input__label"}> Email </label>
                            <input className={"input"} type={"email"} placeholder={"Email"} onChange={(event) => this.handleChange('email', event.target.value)}/>
                            <label className={"input__label"}> Feedback </label>
                            <textarea className={"input"} type={"textarea"} placeholder={"Feedback"} onChange={(event) => this.handleChange('feedback', event.target.value)} />
                            <button onClick={ this.handleSubmit } className={"button button--submit"}>Submit your review</button>
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

const mapStateToProps = ({ReviewModule}) => ({
    review:  {
        data: ReviewModule.review.data,
        created: ReviewModule.review.created,
        creating: ReviewModule.review.creating,
        error: ReviewModule.review.error
    },

});

const mapDispatchToProps = (dispatch) => ({
    createReview: (params) => createReview(params)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFeedbackForm);
