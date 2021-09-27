// Components
import HeaderComponent from "../components/header";
import FormInputComponent from '../components/formInput'

// Models for Components
import {Header, FormInput} from '../models/common'

// Page Styles
import styles from '../styles/pages/Contact.module.scss';
import {InferGetStaticPropsType} from "next";
import React from "react";

type ContactPageViewModel = {
    heading: Header
}

const Contact = ( {content} : InferGetStaticPropsType<typeof getStaticProps> ) => {
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
                                <FormInputComponent
                                    id={'firstName'}
                                    type={'text'}
                                    label={'First Name'}
                                />
                                <FormInputComponent
                                    id={'lastName'}
                                    type={'text'}
                                    label={'Last Name'}
                                />
                                <FormInputComponent
                                    id={'title'}
                                    type={'text'}
                                    label={'Title'}
                                />
                                <FormInputComponent
                                    id={'email'}
                                    type={'email'}
                                    label={'Email'}
                                />
                                <FormInputComponent
                                    id={'message'}
                                    type={'textarea'}
                                    label={'Message'}
                                />
                                <div className={'button'}>
                                    <button>
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
        }
    }

    return {
        props: {
            content
        }
    }
}

export default Contact
