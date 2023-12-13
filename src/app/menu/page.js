"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Header from "@/app/header";


export default function Menu() {

    const router = useRouter()

    return (
        <main className={styles.main}>
            <Header/>
            <h1>
                Столовая Школы Компьютерных Наук
            </h1>
            <p>
                Узнай всё самое главное, спланируй здоровый рацион питания!
            </p>
            <div>

            </div>
        </main>
    )
}
