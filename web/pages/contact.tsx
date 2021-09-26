// Components
import Header from "../components/header";
import Card from "../components/card";

// Models for Components
import {CardData} from "../models/card";
import {HeaderData} from "../models/header";

// Page Styles
import styles from '../styles/pages/Contact.module.scss';

const Contact = () => {
    const header: HeaderData = {
        title: 'Tech Challenge | Contact',
        link: {
            text: 'Home',
            url: '/'
        }
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.content}>
                <Header title={header.title} link={header.link} />

            </div>
        </div>
    )
}


export default Contact
