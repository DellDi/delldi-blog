import React, { useEffect } from 'react'
import styles from "./style.module.css";
export default function BoxCenter({ children, bgColor = "grayen" }) {
    const bgMap = {
        grayen: '#3B3F4E',
        lighten: '#F5F6F7'
    }
    // const [colorState, setColorState] = useState(grayen)
    useEffect(() => {
        const rootDom = document.documentElement;
        rootDom.style.setProperty('--bg-gray', bgMap[bgColor])
    }, [])
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
