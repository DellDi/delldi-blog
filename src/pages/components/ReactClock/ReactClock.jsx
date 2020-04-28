/*
 * @Author: Dell_Di
 * @Date: 2020-04-28 13:42:32
 * @LastEditors: Dell_Di
 * @LastEditTime: 2020-04-28 15:48:49
 * @FilePath: \delldi-blog\src\pages\components\ReactClock\ReactClock.jsx
 */
import React, { useEffect } from 'react';
import clockStyles from './index.module.css';
import classnames from 'classnames'

const clockLists = [
    {
        id: 123,
        hour: '01'
    },
    {
        id: 32,
        hour: '02'
    },
    {
        id: 9090,
        hour: '03'
    },
    {
        id: 32333,
        hour: '04'
    },
    {
        id: 43445,
        hour: '05'
    },
    {
        id: 52323,
        hour: '06'
    },
    {
        id: 64343,
        hour: '07'
    },
    {
        id: 72323,
        hour: '08'
    },
    {
        id: 82323,
        hour: '09'
    },
    {
        id: 9324,
        hour: '10'
    },
    {
        id: 102323,
        hour: '11'
    },
    {
        id: 111233,
        hour: '12'
    }
]

function ClockList() {
    return clockLists.map((item,index) => {
        return (
            <span key={item.id} className={classnames(clockStyles['number'], clockStyles['number' + '-' + (index + 1)])}>{item.hour}</span>
        )
    })
}

export default function ReactClock() {
    // const [state, setstate] = useState(initialState)
    // useEffect(() => {
    //     //Converted Time in Degrees
    //     //Rotate From
    //     const d = new Date();
    //     const convertedSeconds =
    //       ((d.getSeconds() + d.getMilliseconds() / 1000) / 60) * 360;
    //     const convertedMinutes = (d.getMinutes() / 60) * 360;
    //     const convertedHours = ((d.getHours() + d.getMinutes() / 60) / 12) * 360;
    
    //     //Rotate To
    //     const rotateSecondsTo = convertedSeconds + 360;
    //     const rotateMinutesTo = convertedMinutes + 360;
    //     const rotateHoursTo = convertedHours + 360;
    
    //     //Update Css
    //     const rootDom = document.documentElement;
    //     rootDom.style.setProperty('--s-rotate-from', convertedSeconds + 'deg');
    //     rootDom.style.setProperty('--m-rotate-from', convertedMinutes + 'deg');
    //     rootDom.style.setProperty('--h-rotate-from', convertedHours + 'deg');
    //     rootDom.style.setProperty('--s-rotate-to', rotateSecondsTo + 'deg');
    //     rootDom.style.setProperty('--m-rotate-to', rotateMinutesTo + 'deg');
    //     rootDom.style.setProperty('--h-rotate-to', rotateHoursTo + 'deg');
    //   }, []);
    return (
        <section className={clockStyles.working}>
            <div className={clockStyles.clock}>
                <div className={clockStyles['clock-top']}>
                    <div className={clockStyles['sec-min-container']}>
                        <div className={clockStyles['min-container']}>
                            <div className={clockStyles['min-pointer']}></div>
                        </div>
                        <div className={clockStyles['sec-container']}>
                            <div className={clockStyles['sec-pointer']}></div>
                        </div>
                    </div>
                    <div className={clockStyles['hours-container']}>
                        <div className={clockStyles['hours-pointer']}></div>
                    </div>
                </div>
                <div className={clockStyles['clock-center']}>
                    <ClockList />
                </div>
            </div>
        </section>
    )
}
