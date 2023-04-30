import styles from '@/styles/NetworkCard.module.css'
import Link from "next/link";
import Image from 'next/image';

export default function NetworkCard({ title, status, description, herf, src }) {
    return (
        <Link href={herf} className={styles.link}>
            <div className={styles.card}>
                <Image src={src} className={styles.img} width={170} height={240} />



                <div className={styles.info}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>

                    <div className={styles.status}>
                        {status ? (
                            <>Начать работу с моделью</>) :
                            (<>В разработке</>
                            )}
                    </div>

                    <div className={styles.price}>
                        1$ за 100 запросов
                    </div>
                </div>
            </div>
        </Link>
    )
}