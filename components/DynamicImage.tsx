"use client"

import React, { useState, useEffect } from "react"
import styles from './mainblog.module.scss'
import Image from "next/image";

const One = '/content/1.jpg'
const Two = '/content/2.jpg'
const Three = '/content/3.jpg'
const Four = '/content/4.jpg'
const Five = '/content/5.jpg'
const Six = '/content/6.jpg'
const Seven = '/content/7.jpg'
const Eight = '/content/8.jpg'
const Circle = '/content/top-circle-fine.png'

function DynamicImage () {
    const initialImage =
        <Image
            src="/content/1.jpg"
            alt="Dynamic Img"
            className={styles.image}
            width={400}
            height={500}
        />
    const [image, setImage] = useState(initialImage)

    useEffect(() => {
        setInterval(() => {
            setImage(getImage())
        }, 3000);
    }, [])

    function getImage() {
        const randNum = Math.floor((Math.random() * 8) + 1);
        const images = [One, Two, Three, Four, Five, Six, Seven, Eight];
        let imageComponent: string = '';
        let selectedImage = image;
        for (const img in images) {
            if (parseInt(img) === randNum) {
                imageComponent = `/content/${randNum}.jpg`;
                selectedImage =
                    <Image
                        src={imageComponent}
                        alt="Dynamic Img"
                        className={styles.image}
                        width={400}
                        height={500}
                    />
            }
        }
        return selectedImage;
    }


    return (
        <div className={styles.dynamicImg}>
        <div className={styles.circle}>
            <Image
                src={Circle}
                alt="circle"
                width={350}
                height={300}
            />
        </div>
            {image}
        </div>
        )
}

export default DynamicImage;
