"use client"

import React, { useState } from "react"
import Image from "next/image";
import Modal from 'react-modal'
import styles from './bio.module.scss'

function Bio() {
    const author = 'Andre Rodriguez';

    function modalHandler (event: React.UIEvent): any {
        event.preventDefault();
        setIsModalOpen(!isModalOpen)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'floralwhite',
            width: '60%',
            height: '90%',
            maxHeight: '80%',
            overflowY: 'scroll',
            zIndex: 100
        },
    };

    const classes = [{ _name: "Human-Computer Interaction", url: "https://omscs.gatech.edu/cs-6750-human-computer-interaction"}, {_name: "Knowledge-Based Artificial Intelligence" , url: "https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems"}, {_name: "Machine Learning for Trading", url: "https://omscs.gatech.edu/cs-7646-machine-learning-trading"}, {_name: "Computer Networks", url: "https://omscs.gatech.edu/cs-6250-computer-networks"}, {_name: "Artificial Intelligence, Ethics and Society", url: "https://omscs.gatech.edu/cs-6603-ai-ethics-and-society"}]
    type _Class = { _name: string, url: string };

    const ModalContent = (<div>
        <div className={styles.closeModal}>
            <Image className={styles.cancelIcon} width={20} height={20} alt="cancel icon" src={'/content/cancel.png'} onClick={modalHandler} />
        </div>
        <div className={styles.classInfo}>
            <ul className={styles.classList}>
                {Object.values(classes).map((_class: _Class) => {
                    return <li key={_class._name} className={styles.classListElement}><a target={"_blank"} href={_class.url}>{_class._name}</a></li>
                })}
            </ul>
        </div>
    </div>);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div
            style={{
                marginBottom: '25px',
            }}
        >
            <p style={{textAlign: 'center'}} className={styles.introDescription}>
                <strong>{author}</strong>{' is a '}<span className={styles.papyrus}>{'Software Engineer'}</span>{' and '}<span className={styles.times}>{'Designer '}</span>
                {'located in San José, Costa Rica.\n He likes music 🎵, art 🎨, oxford commas 🎓, and building things using computers 💻.'}
            </p>
            <p style={{textAlign: 'center'}} className={styles.introDescription}>
                <span>~He is particularly good at building user interfaces and accesibility.~ 🦾</span>
            </p>
            <p style={{textAlign: 'center'}} className={styles.introDescription}>
                <i>{'I'}</i><span id="times">{', *ugh* -I mean-, '}</span><strong>He</strong><span id="times">{', is currently enrolled at the Georgia Institute of Technology pursuing a Masters Degree with a specialization in Interactive Intelligence, while also working professionally.'}</span>
            </p>
            <p style={{textAlign: 'center'}} className={styles.introDescription}>
                <span>{'A list of the classes taken at Georgia Tech so far can be seen'}</span><a onClick={(e) => modalHandler(e)}href={'/'}>{' ~here~'}</a>
            </p>
            <p style={{textAlign: 'center'}} className={styles.introDescription}>
                <span>{' Other interests are listed below.'}</span>
            </p>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(!isModalOpen)}
                overlayClassName={'general-modal'}
                // @ts-ignore
                style={customStyles}
                contentLabel="Example Modal"
            >
                {ModalContent}
            </Modal>
        </div>
    )
}

export default Bio
