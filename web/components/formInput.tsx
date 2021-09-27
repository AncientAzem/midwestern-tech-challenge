import React, {Component, ChangeEvent, FocusEvent, useEffect} from "react";
import validator from 'validator'
import {Input, UpdatedStatusFunc} from "../models/forms";
import styles from '../styles/components/FormInput.module.scss'

type FormInput = {
    input: Input;
    updateHandler: UpdatedStatusFunc;
}

class FormInputComponent extends Component<FormInput>{
    constructor(props: Readonly<FormInput>){
        super(props);
        this.validateInput = this.validateInput.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    validateInput (input: HTMLInputElement) {
        if(input.required){
            if(input.type == 'email') {
                switch (validator.isEmail(input.value)){
                    case true:
                        input.parentElement!.classList.remove(styles.invalid);
                        return true;
                    case false:
                        input.parentElement!.classList.add(styles.invalid);
                        return false;
                }
            } else {
                switch(input.value != ''){
                    case true:
                        input.parentElement!.classList.remove(styles.invalid);
                        return true;
                    case false:
                        input.parentElement!.classList.add(styles.invalid);
                        return false;
                }
            }
        } else { return true }
    }

    handleOnFocus(ev: FocusEvent<any>) {
        let target = ev.target;
        target.parentElement!.classList.add(styles.active);
    }

    handleOnBlur(ev: FocusEvent<any>) {
        let target = ev.target;
        if(!target.value) {
            target.parentElement!.classList.remove(styles.active);
            this.props.updateHandler(this.props.input, this.validateInput(target));
        }
    }

    handleOnChange(ev: ChangeEvent<any>) {
        let target = ev.target;
        this.props.updateHandler(this.props.input, this.validateInput(target));
    }

    render() {
        return (
            <div className={styles.formInputContainer}>
                <label htmlFor={this.props.input.id}>{this.props.input.label}</label>
                {this.props.input.required &&
                    <span>Required</span>
                }
                {this.props.input.type == 'textarea' ?
                    <textarea
                        id={this.props.input.id}
                        placeholder={this.props.input.placeholder}
                        rows={8}
                        maxLength={500}
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                        required={this.props.input.required}
                        onChange={this.handleOnChange}
                    /> :
                    <input
                        type={this.props.input.type}
                        id={this.props.input.id}
                        placeholder={this.props.input.placeholder}
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                        required={this.props.input.required}
                        onChange={this.handleOnChange}
                    />
                }
            </div>
        )
    }
}

export default FormInputComponent
