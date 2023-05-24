import React from 'react'
import { isMobile } from 'react-device-detect';
import styles from './line.module.scss'

const getArray = () => {
    const boxArray = [];
    const lineLen = isMobile ? 22 : 40;
    for (let i=0;i<lineLen;i++) {
        const randomColor = require('random-color');
        const color = randomColor(0.99, 0.99).hexString();
        boxArray.push(<input
            key={color + i}
            type="checkbox"
            style={{marginLeft: '3px'}}
            onChange={(event)=> onSelect(event)}
            value={color}/>);
    }
    return boxArray;
}

const onSelect = (e: any) => {
    let bgColor = e.target.value;
    if (e.target.checked === false) {
        bgColor = 'white';
    }
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = "ease 1s";
}

const Line = () => (
    <div className={styles.checkboxes}>
        {getArray()}
    </div>
)

export default Line;
