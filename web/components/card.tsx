import {Card} from "../models/card";
import {Component} from "react";
import Image from 'next/image'
import styles from '../styles/components/Card.module.scss';

class CardComponent extends Component<Card> {
    render() {
        return (
            <div className={styles.card}>
                {this.props.icon != null &&
                    <div className={styles.icon}>
                        <Image
                            alt={this.props.heading + 'icon'}
                            src={this.props.icon.path}
                            height={this.props.icon.height}
                            width={this.props.icon.width}
                        />
                    </div>
                }
                <h2>{this.props.heading}</h2>
                <p>{this.props.body}</p>
                {(this.props.button != null) &&
                    <div className={'button'}>
                        <a href={this.props.button.url}>
                            {this.props.button.text}
                        </a>
                    </div>
                }
            </div>
        )
    }
}

export default CardComponent
