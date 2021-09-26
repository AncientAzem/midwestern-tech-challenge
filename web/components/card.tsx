import {CardData} from "../models/common";
import {Component} from "react";
import Image from 'next/image'
import styles from '../styles/components/Card.module.scss';

class Card extends Component<CardData> {
    render() {
        return (
            <div className={styles.card}>
                {this.props.icon != null &&
                    <div className={styles.icon}>
                        <Image
                            src={this.props.icon.path}
                            height={this.props.icon.height}
                            width={this.props.icon.width}
                        />
                    </div>
                }
                <h2>{this.props.heading}</h2>
                <p>{this.props.body}</p>
                {(this.props.button != null) &&
                    <div className={styles.link}>
                        <a href={this.props.button.url}>
                            {this.props.button.text}
                        </a>
                    </div>
                }
            </div>
        )
    }
}

export default Card
