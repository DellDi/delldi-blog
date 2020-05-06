/*
 * @Author: Dell_Di
 * @Date: 2020-04-28 13:42:32
 * @LastEditors: Dell_Di
 * @LastEditTime: 2020-05-06 11:55:52
 * @FilePath: \delldi-blog\src\components\ReactClock\ReactClock.jsx
 */
import React, { useEffect } from 'react';
import clockStyles from './index.module.css';
import classnames from 'classnames'

const clockLists = [1,2,3,4,5,6,7,8,9,10,11,12]

function ClockList() {
    return clockLists.map((item,index) => {
        return (
            <span key={item} className={classnames(clockStyles['number'], clockStyles['number' + '-' + (index + 1)])}>{item}</span>
        )
    })
}

export default function ReactClock() {
    useEffect(() => {
        //Converted Time in Degrees
        const d = new Date();
        const convertedSeconds =
          ((d.getSeconds() + d.getMilliseconds() / 1000) / 60) * 360;
        const convertedMinutes = (d.getMinutes() / 60) * 360;
        const convertedHours = ((d.getHours() + d.getMinutes() / 60) / 12) * 360;
    
        const rotateSecondsTo = convertedSeconds + 360;
        const rotateMinutesTo = convertedMinutes + 360;
        const rotateHoursTo = convertedHours + 360;
    
        //Update Css
        const rootDom = document.documentElement;
        rootDom.style.setProperty('--s-rotate-from', convertedSeconds + 'deg');
        rootDom.style.setProperty('--m-rotate-from', convertedMinutes + 'deg');
        rootDom.style.setProperty('--h-rotate-from', convertedHours + 'deg');
        rootDom.style.setProperty('--s-rotate-to', rotateSecondsTo + 'deg');
        rootDom.style.setProperty('--m-rotate-to', rotateMinutesTo + 'deg');
        rootDom.style.setProperty('--h-rotate-to', rotateHoursTo + 'deg');
      }, []);
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
