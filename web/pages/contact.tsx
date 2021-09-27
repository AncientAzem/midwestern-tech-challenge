// Components
import HeaderComponent from "../components/header";
import FormInputComponent from '../components/formInput'

// Models for Components
import {Header} from '../models/common'

// Page Styles
import styles from '../styles/pages/Contact.module.scss';
import {InferGetStaticPropsType} from "next";
import React, {useRef, useState} from "react";
import {Input} from "../components/forms";

type ContactPageViewModel = {
    heading: Header
    inputs: Input[]
}

const Contact = ( {content} : InferGetStaticPropsType<typeof getStaticProps> ) => {
    const [formData, updateFormData] = useState<Input[]>();
    let formValid = false;

    function handleUpdatedInput(inputObject: Input, isValid: boolean){
        if(formData == undefined) {
            updateFormData([inputObject])
        } else {
            let newFormData = formData;
            let existingItemIndex = newFormData.findIndex(i => i.id == inputObject.id);
            console.log(existingItemIndex)
            if(existingItemIndex == -1){
                inputObject.valid = isValid;
                newFormData.push(inputObject)
            } else {
                newFormData[existingItemIndex].valid = isValid;
                updateFormData(newFormData);
            }
        }

        if(formData?.length == content.inputs.length && formData?.every(i => i.valid)) {
            console.log('Form Valid')
            formValid = true;
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.content}>
                <HeaderComponent title={content.heading.title} link={content.heading.link} />

                <main>
                    <section className={styles.instructions}>
                        <h1><span className={'underline'}>Contact</span> Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.
                            Proin sagittis nisl rhoncus mattis rhoncus. <br/><br/> At augue eget arcu dictum varius duis at consectetur lorem.
                        </p>
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
    const content: ContactPageViewModel = {
        heading: {
            title: 'Tech Challenge | Contact',
            link: {
                text: 'Home',
                url: '/'
            }
        },
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
