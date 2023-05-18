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
            description: "Распознать пневмонию на рентгеновских снимках довольно сложно, поскольку поражения легких часто имеют смутные очертания и к тому же иногда очень похожи на другие заболевания. Поэтому рентгенолог должен иметь высокую квалификацию, чтобы диагностировать пневмонию. Данная модель использует обученную 121-уровневую нейронную сеть.",
            status: false,
            herf: "",
            src: 'https://sun1-90.userapi.com/D3dFaQsQXXF7EQcq4rUUM2keS1vRex7duGCikw/bB8PAH2htZM.jpg'
        },
        {
            title: "Cancer-Detection",
            description: "Распознавание рака по рентгену",
            status: false,
            herf: "",
            src: "https://naked-science.ru/wp-content/uploads/2018/12/field_image_111111111111.jpg"
        },
    ])

    return (
        <div className={styles.landing_page}>
            <div className={styles.description}>

                <div className={styles.header}>
                    СHECK HEALTH
                </div>

                <div className={styles.subheader}>
                    <p>
                    СHECK HEALTH -  единая площадка, <br /> целью которой является объединение новейших моделей искусственного интеллекта в медицине
                    </p>
                </div>
                <p className={styles.call_to_action}>Компьютерное зрение для распознавания заболеваний
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
