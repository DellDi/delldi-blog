import React from 'react'
import classnames from 'classnames';
import btnStyles from './btn.module.css'

export default function Button({text="Shine Button"}) {
    return (
        <button className={
            classnames(btnStyles.btn, btnStyles['btn-primary'], btnStyles['btn-ghost'], btnStyles['btn-shine'])
        }>
            {text}
        </button>
    )
}
