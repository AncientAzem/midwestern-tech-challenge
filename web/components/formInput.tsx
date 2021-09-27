import React, { Component, FocusEvent } from "react";
import {FormInput} from "../models/common";
import styles from '../styles/components/FormInput.module.scss'

class FormInputComponent extends Component<FormInput>{
    handleOnFocus(ev: FocusEvent<any>) {
        let target = ev.target;
        target.parentElement!.classList.add(styles.active);
    }

    handleOnBlur(ev: FocusEvent<any>) {
        let target = ev.target;
        if(!target.value) {
            target.parentElement!.classList.remove(styles.active);
        }
    }

    render() {
        return (
            <div className={styles.formInputContainer}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                {this.props.type == 'textarea' ?
                    <textarea
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        rows={8}
                        maxLength={500}
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                    /> :
                    <input
                        type={this.props.type}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                    />
                }
            </div>
        )
    }
}

export default FormInputComponent
