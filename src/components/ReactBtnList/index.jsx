import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import className from "classnames";

export default function Button({ children, color, type = "primary" }) {
    return (
        <button
            className={className(styles.button, {
                [styles.red]: color === "red",
                [styles.black]: color === "black",
                [styles.secondary]: type === "secondary"
            })}
        >
            {children}
        </button>
    );
}

export const HoverButton = function ({ children = "Hover Button" }) {
    const [typeState, setTypeState] = useState(1)
    useEffect(() => {
        let timer = setInterval(() => {
            if (typeState < 5) {
                setTypeState(typeState + 1)
            } else {
                setTypeState(1)
            }
        }, 3000);
        return () => {
            clearInterval(timer)
            timer = null
        }
    }, [typeState])
    return (
        <div className={styles['btn-container']}>
            <button className={className(styles.btn, styles['btn' + typeState])}>{children}</button>
        </div>
    )
}
