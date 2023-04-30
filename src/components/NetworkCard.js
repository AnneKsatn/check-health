import styles from '@/styles/NetworkCard.module.css'
import Link from "next/link";

export default function NetworkCard({ title, status, description, herf, src }) {
    return (
        <Link href={herf} className={styles.link}>
            <div className={styles.card}>
                <img src={src} className={styles.img} />



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