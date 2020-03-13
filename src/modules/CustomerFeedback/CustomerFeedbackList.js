import React, {PureComponent} from "react";

class CustomerFeedbackList extends PureComponent {

    render() {
        const {reviews, limit, summarized} = this.props;
        return (
            <div className={"list__container"} limit={limit}>
                <div className={"list__item"}>
                   <div className={"list__header"}> Dave, 31 </div>
                   <div className={"list__caption"} summarized> Absolutely love everything about it. </div>
               </div>
                <div className={"list__item"}>
                    <div className={"list__header"}> Dave, 31 </div>
                    <div className={"list__caption"} summarized> Absolutely love everything about it. </div>
                </div>

                <div className={"list__item"}>
                    <div className={"list__header"}> Dave, 31 </div>
                    <div className={"list__caption"} summarized> Absolutely love everything about it. </div>
                </div>
            </div>
        )
    }
}

export default CustomerFeedbackList;
