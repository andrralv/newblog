import React from 'react'
import styles from './links.module.scss'

class Links extends React.Component {

    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <td className={styles.linksTableLeft}>
                            <ul>
                                <li className={styles.linksLeft}>
                                    <a href="https://i.imgur.com/8Rim0Zl.jpg"
                                       rel="noopener noreferrer" target="_blank">More About Me</a>
                                </li>
                                <li className={styles.linksLeft}>
                                    <a href="https://github.com/andrralv"
                                       rel="noopener noreferrer" target="_blank">Github</a>
                                </li>
                                <li className={styles.linksLeft}>
                                    <a href="mailto:andrralv@gmail.com">Email Me</a>
                                </li>
                                <li className={styles.linksLeft}>
                                    <a href="https://tinyurl.com/gatechprofile"
                                       rel="noopener noreferrer" target="_blank">GAtech Profile</a>
                                </li>
                            </ul>
                        </td>
                        <td className={styles.linksTableRight}>
                            <ul>
                                <li className={styles.linksRight}>
                                    <a href="https://www.linkedin.com/in/andrralv/"
                                       rel="noopener noreferrer" target="_blank">LinkedIn Park</a>
                                </li>
                                <li className={styles.linksRight}>
                                    <a href="https://www.behance.net/user/?username=andrralv"
                                       rel="noopener noreferrer" target="_blank">Behance</a>
                                </li>
                                <li className={styles.linksRight}>
                                    <a href="http://discostuanis.com" target="_blank"
                                       rel="noopener noreferrer" >Discos Tuanis</a><span className="emoji"> 📀</span>
                                </li>
                                <li className={styles.linksRight}>
                                    <a href="https://agnosplus.bandcamp.com/album/cueva-con-serpientes-pueblo-en-la-monta-a"
                                       rel="noopener noreferrer" target="_blank">Bandcamp </a>
                                    |
                                    <a href="https://vicepresidente.bandcamp.com"
                                       rel="noopener noreferrer" target="_blank"> (II) </a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Links;
