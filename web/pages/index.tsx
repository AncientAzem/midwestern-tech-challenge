import { useState } from 'react'
import {InferGetStaticPropsType} from "next";
import Swal from 'sweetalert2'

// Components
import HeaderComponent from "../components/header";
import CardComponent from "../components/card";

// Models for Components
import {Header, SvgIcon} from "../models/common";
import {Card} from "../models/card";

// Page Styles
import styles from '../styles/pages/Landing.module.scss'
import {SiteCalloutDatabaseModel} from "../models/apiModels";

type LandingViewModel = {
    heading: Header
    cards?: Card[]
}

const Landing = ( {content} : InferGetStaticPropsType<typeof getStaticProps> ) => {
    const [filteredNames, setFilteredNames] = useState<string[]>()

    function filterDuplicateNamesChallenge(){
        if (filteredNames != undefined){
            Swal.fire({
                title: "Error!",
                text: "You have already completed this operation.",
                icon: "error"
            })
        } else {
            let firstList = [
                'Matt Johnson',
                'Bart Paden',
                'Ryan Doss',
                'Jared Malcolm'
            ];
            let secondList = [
                'Matt Johnson',
                'Bart Paden',
                'Jordan Heigle',
                'Tyler Viles'
            ];

            let combinedList = secondList.concat(firstList);
            setFilteredNames(combinedList
                .filter((object, index, array) => array.findIndex(o => o == object) === index
                ));
        }
    }

    return (
        <div className={styles.homeContainer}>
            <HeaderComponent title={content.heading.title} link={content.heading.link} />

            <main>
                <div className={styles.cards}>
                    {content.cards?.map((card, index) => {
                        return (
                            <CardComponent key={index}
                                           icon={card.icon}
                                           heading={card.heading}
                                           body={card.body}
                                           button={card.button}
                            />
                        )
                    })}
                </div>

                <div className={styles.challenge}>
                    <h1><span className={'underline'}>Technical</span>  Challenge</h1>
                    <p>
                        Remove the duplicates in 2 Javascript objects and output the list of distinct names in an
                        unordered list when <a onClick={filterDuplicateNamesChallenge}> this link</a> is clicked. If the operation has been completed already notify
                        the user that this has already been done.
                    </p>

                    <ul>
                        {filteredNames?.map( (name, index) =>
                            <li key={index}>{name}</li>
                        )}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    const pageDataRequest = await fetch('http://localhost:8081/api/content/index');
    const pageCalloutsRequest = await fetch('http://localhost:8081/api/callouts');

    const pageData = await pageDataRequest.json();
    const pageCallouts = await pageCalloutsRequest.json();

    let cards: Card[] = [];
    pageCallouts.forEach(function (callout: SiteCalloutDatabaseModel) {
        let card: Card = {
            body: callout.body,
            button: null,
            heading: callout.heading,
            icon: null
        }

        // Process Icon
        if (callout.icon != undefined) {
            card.icon = {
                height: 0, width: 0,
                path: `/images/${callout.icon}.svg`
            };
            if (callout.icon == 'Talkie') {
                card.icon.height = 106;
                card.icon.width = 51;
            } else if (callout.icon == 'Rabbit') {
                card.icon.height = 62;
                card.icon.width = 103;
            } else if (callout.icon == 'Shield') {
                card.icon.height = 98;
                card.icon.width = 98;
            } else {
                card.icon = null;
            }
        }

        console.log(callout);
        // Process Button
        if (callout.link_text != undefined && callout.link_url != undefined){
            card.button = {
                text: callout.link_text!,
                url: callout.link_url!
            }
        }

        cards.push(card);
    });

    const content: LandingViewModel = {
        heading: {
            title: pageData.title,
            link: {
                text: "Contact",
                url: "/contact"
            }
        },
        cards: cards
    }

    return {
        props: {
            content
        }
    }
}

export default Landing
