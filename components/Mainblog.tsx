import React, { ReactNode } from "react"
import Image from "next/image"
import styles from './mainblog.module.scss'
import DynamicImage from './DynamicImage'
import Links from './Links'
import Bio from './Bio'

type MainBlogProps = {
    children: ReactNode
}

function Mainblog(props: MainBlogProps) {
    const { children } = props
    const header = (<Image width={400} height={400} className={styles.image} alt='nice pictures' style={{width: '420px', height: 'auto'}} src={'/content/name-digital-black.png'} />)
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                paddingTop: `0px`,
                marginBottom: '40px'
            }}
        >
            <DynamicImage />
            <header className={styles.header}>{header}</header>
            <div className={styles.line}>{children}</div>
            <Bio />
            <Links />
            <footer style={{marginTop: '35px', marginBottom: '5px', textAlign: 'center'}}>
                © {new Date().getFullYear()}
                {`   André Rodríguez `}
            </footer>
        </div>
    )
}

export default Mainblog;
