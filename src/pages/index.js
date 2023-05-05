import DesignBrainLogo from "@/components/DesignBrainLogo";
import ImageSlider from "@/components/ImageSlider";
import NetworkCard from "@/components/NetworkCard";

import styles from '@/styles/Home.module.scss'
import Link from "next/link";
import { useState } from "react";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css'

export default function Home() {

    const [networks, setNetworks] = useState([
        {
            title: "Neurite",
            description: "Анализ медицинских изображений",
            status: true,
            herf: "/service",
            src: 'https://static.tildacdn.com/tild3139-3530-4336-a534-326461356336/chest-5.jpg'
        },
        {
            title: "Pneumonia-Detection",
            description: "Распознавание пневмонии по рентгену",
            status: false,
            herf: "",
            src: 'https://static.tildacdn.com/tild3139-3530-4336-a534-326461356336/chest-5.jpg'
        },
        {
            title: "Cancer-Detection",
            description: "Распознавание рака по рентгену",
            status: false,
            herf: "",
            src: "https://static.tildacdn.com/tild3139-3530-4336-a534-326461356336/chest-5.jpg"
        },
    ])

    return (
        <div className={styles.landing_page}>
            <div className={styles.description}>

                <div className={styles.header}>
                    HEALTH CECK
                </div>

                <div className={styles.subheader}>
                    <p>
                        Диспансеризация <br /> с помощью искуственного интеллекта
                    </p>
                </div>
                <p className={styles.call_to_action}>Пройдите полное обследование с помощью ИИ за считанные минуты.
                </p>

            </div>


            {/* <div className={styles.section_title}>
                Каталог моделей
            </div> */}
            <div className={styles.section}>

                <div className={styles.network_cards}>
                    {networks.map((network) => (
                        <div className={styles.card_container} key={network.title}>
                            <NetworkCard
                                title={network.title}
                                status={network.status}
                                description={network.description}
                                herf={network.herf}
                                src={network.src}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
}
