// Components
import HeaderComponent from "../components/header";
import FormInputComponent from '../components/formInput'

// Models for Components
import {Header} from '../models/common'

// Page Styles
import styles from '../styles/pages/Contact.module.scss';
import {InferGetStaticPropsType} from "next";
import Router from 'next/router'
import React, {useRef, useState} from "react";
import {FormDataItem, Input} from "../models/forms";
import Swal from "sweetalert2";

type ContactPageViewModel = {
    heading: Header
    instructions: string
    inputs: Input[]
}

const Contact = ( {content} : InferGetStaticPropsType<typeof getStaticProps> ) => {
    const [formData, updateFormData] = useState<FormDataItem[]>();
    let formValid = false;
    let contactForm: HTMLFormElement | null;

    function handleUpdatedInput(id: string, value: any, isValid: boolean){
        if(formData == undefined) {
            updateFormData([{id: id, value: value, valid: isValid}])
        } else {
            let newFormData = formData;
            let existingItemIndex = newFormData.findIndex(i => i.id == id);
            if(existingItemIndex == -1){
                newFormData.push({id: id, value: value, valid: isValid})
            } else {
                newFormData[existingItemIndex].valid = isValid;
                newFormData[existingItemIndex].value = value;
                updateFormData(newFormData);
            }
        }

        if(formData?.length == content.inputs.length && formData?.every(i => i.valid)) {
            console.log('Form Valid')
            formValid = true;
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const submissionData = new FormData();
        formData?.forEach(input => {
            submissionData.append(input.id, input.value);
        })
        console.log(submissionData);

        const request = await fetch('http://localhost:8081/api/contact', {
            body: submissionData,
            method: 'POST'
        })
        if (request.status != 200) {
            console.log('ERROR')
            await Swal.fire({
                title: "Ohh No!",
                text: "Something went wrong when submitting your request. Please try again.",
                icon: "error"
            })
        } else {
            console.log('DONE');
            await Swal.fire({
                title: "Submission Complete",
                text: await request.text(),
                icon: "success"
            }).then(_ => {
                Router.reload();
            })
        }
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.content}>
                <HeaderComponent title={content.heading.title} link={content.heading.link} />

                <main>
                    <section className={styles.instructions}>
                        <h1><span className={'underline'}>Contact</span> Us</h1>
                        <p>{content.instructions}</p>
                    </section>
                    <section>
                        <div className={styles.formContent}>
                            <h2>Submission Form</h2>
                            <form onSubmit={handleSubmit}>
                                {content.inputs.map((input) => {
                                    return (
                                        <FormInputComponent
                                            key={input.id}
                                            input={input}
                                            updateHandler={handleUpdatedInput}
                                        />
                                    )
                                })}
                                <div className={'button'}>
                                    <button disabled={formValid}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:8081/api/content/contact');
    const data = await response.json();

    const content: ContactPageViewModel = {
        heading: {
            title: data.title,
            link: {
                text: 'Home',
                url: '/'
            }
        },
        instructions: data.body,
        inputs: [
            {id: 'firstName', type: 'text', label: 'First Name', required: true},
            {id: 'lastName', type: 'text', label: 'Last Name', required: true},
            {id: 'title', type: 'text', label: 'Title', required: true},
            {id: 'email', type: 'email', label: 'Email', required: true},
            {id: 'message', type: 'textarea', label: 'Message', required: true}
        ]
    }

    return {
        props: {
            content
        }
    }
}

export default Contact
