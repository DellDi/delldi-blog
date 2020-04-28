import React, { Fragment } from 'react'

export default function Snow(props) {
    let item = [];

    for (let index = 0; index < 100; index++) {
        item.push(<div key={index} className={props.snow}></div>)
    }
    return (
        <Fragment>
            {item}
        </Fragment>
    )
}
