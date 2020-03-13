import React, {PureComponent} from "react";

class CustomerFeedbackCoinFlip extends PureComponent {

    constructor() {
        super();
        this.state = {
            flipping: false
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    componentDidUpdate(prevState) {
        if(this.state.flipping) {
            setTimeout(() => {
                this.setState(() => ({flipping: false}))
            }, 1000);
        }
    }
    flipCoin() {
        this.setState({
            flipping: true
        });
    }

    render() {
        const coinClassName = `coin ${this.state.flipping  ? 'coin--animate': ''}`;
        const activeCoinSide = Math.random() >= 0.5 ? 'front': 'back';
        const coinFrontClassName = activeCoinSide === 'front' ? 'coin__front' : 'coin__front coin__front--inactive'
        const coinBackClassName = activeCoinSide === 'back' ? 'coin__back' : 'coin__back coin__back--inactive'

        return(
            <div className={"coin__container"}>
                <h3> Or have some fun.. </h3>
                <div className={coinClassName}>
                    <div className={coinFrontClassName}></div>
                    <div className="coin__edge">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                    <div className={coinBackClassName}></div>
                </div>
                <button className={"button button--outlined"} onClick={this.flipCoin}>Flip coin</button>
            </div>
        )
    }
}

export default CustomerFeedbackCoinFlip;