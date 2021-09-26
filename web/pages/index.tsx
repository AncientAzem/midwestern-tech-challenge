import { useState } from 'react'
import {InferGetStaticPropsType} from "next";
import Swal from 'sweetalert2'

// Components
import Header from "../components/header";
import Card from "../components/card";

// Models for Components
import {CardData} from "../models/card";
import {HeaderData} from "../models/header";

// Page Styles
import styles from '../styles/pages/Landing.module.scss'

type LandingViewModel = {
    heading: HeaderData
    cards?: CardData[]
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
        <div className={styles.container}>
            <Header title={content.heading.title} link={content.heading.link} />

            <main>
                <div className={styles.cards}>
                    {content.cards?.map((card, index) => {
                        return (
                            <Card key={index}
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
    const content: LandingViewModel = {
        heading: {
            title: 'Tech Challenge | Home',
            link: {
                text: "Contact",
                url: "/contact"
            }
        },
        cards: [
            {
                icon: {
                    path:  "/images/Talkie.svg",
                    width: 50,
                    height: 105
                },
                heading: "Heading One",
                body: "Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus. ",
                button: {
                    text: "Learn More",
                    url: "https://github.com/Midwestern-Interactive/tech-challenge"
                }
            },
            {
                icon: {
                    path:  "/images/Rabbit.svg",
                    width: 105,
                    height: 62
                },
                heading: "Heading Two",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                button: {
                    text: "Learn More",
                    url: "https://github.com/Midwestern-Interactive/tech-challenge"
                }
            },
            {
                icon: {
                    path:  "/images/Shield.svg",
                    width: 98,
                    height: 98
                },
                heading: "Heading Three",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                button: {
                    text: "Learn More",
                    url: "https://github.com/Midwestern-Interactive/tech-challenge"
                }
            }
        ]
    }

    return {
        props: {
            content
        }
    }
}

export default Landing
