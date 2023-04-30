import DesignBrainLogo from "@/components/DesignBrainLogo";
import ImageSlider from "@/components/ImageSlider";
import NetworkCard from "@/components/NetworkCard";

import styles from '@/styles/Home.module.scss'
import Link from "next/link";
import { useState } from "react";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css'

export default function Home() {

    const FIRST_IMAGE = {
        imageUrl: 'https://sun9-69.userapi.com/impf/EpanNJQEv6I5kMNXI-67oJ4TXy4ACMO-8ttP_w/x1Cd-6iQ8k0.jpg?size=1920x768&quality=95&crop=0,164,2048,818&sign=7d79a14b234685badc2e399db5f9b69e&type=cover_group'
    }
    const SECOND_IMAGE = {
        imageUrl: 'https://sun9-69.userapi.com/impf/EpanNJQEv6I5kMNXI-67oJ4TXy4ACMO-8ttP_w/x1Cd-6iQ8k0.jpg?size=1920x768&quality=95&crop=0,164,2048,818&sign=7d79a14b234685badc2e399db5f9b69e&type=cover_group'
    }

    const [networks, setNetworks] = useState([
        {
            title: "Controlnet Hough",
            description: "Controlnet Hough генерирует дизайны интерьеров.",
            status: true,
            herf: "/service",
            src: 'https://techbriefly.com/wp-content/uploads/2022/11/Interior-AI-5.jpg'
        },
        {
            title: "Image Restoration",
            description: "Image Restoration отреставрирует старые фотографии.",
            status: false,
            herf: "",
            src: 'https://replicate.delivery/mgxm/a79d403f-ab71-4a23-a976-59a25341dcb3/out.png'
        },
        {
            title: "Super Resolution",
            description: "Super Resolution восстановит качество размытой фотографии",
            status: false,
            herf: "",
            src: "https://tjzk.replicate.delivery/models_models_cover_image/aabde67b-bf5c-4fc8-a4bd-8b2dcba60be6/swin2sr-cover3.png"
        },
    ])

    return (
        <div className={styles.landing_page}>
            <div className={styles.description}>

                <div className={styles.header}>
                    NEURO NET
                </div>

                <div className={styles.subheader}>
                    <p>
                        Маркетплейс <br /> моделей искуственного интеллекта
                    </p>
                </div>
                <p className={styles.call_to_action}>Получите доступ ко всем возможностям ИИ одним нажатием кнопки <br />или разверните свою модель машинного обучения за считанные минуты.
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
