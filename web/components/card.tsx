import {CardData} from "../models/common";
import {Component} from "react";

class Card extends Component<CardData> {
    render() {1
        return (
            <div>
                <h2>{this.props.heading}</h2>
                <p>{this.props.body}</p>
                {(this.props.button != null) &&
                    <a href={this.props.button.url}>
                        {this.props.button.text}
                    </a>
                }
            </div>
        )
    }
}

export default Card
