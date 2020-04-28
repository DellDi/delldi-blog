import React from 'react'
import classnames from 'classnames';
import btnStyles from './btn.module.css'

export default function Button(props) {
    return (
        <button className={
            classnames(btnStyles.btn, btnStyles['btn-primary'], btnStyles['btn-ghost'], btnStyles['btn-shine'])
        }>
            {props.text}
        </button>
    )
}
