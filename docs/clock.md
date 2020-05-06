---
id: clock 
title: 时钟
---

import ReactClock from '../src/components/ReactClock/ReactClock.jsx'

<ReactClock />

---

css部分使用了 `root`,`grid`,`clip-path`，详细的css代码可以在github的源码中找到。

```css
:root {
  --primary-color: #e53935;
  --shadow-color: #0e0e0e;
  --clock-my-color: #212121;
  /*圆周时间，时分秒*/
  --s-rotate-time: 60s;
  --m-rotate-time: 3600s;
  --h-rotate-time: 43200s;
  /*圆周起始角度*/
  --s-rotate-from: 0deg;
  --m-rotate-from: 0deg;
  --h-rotate-from: 0deg;
  /*圆周走向角度*/
  --s-rotate-to: 0deg;
  --m-rotate-to: 0deg;
  --h-rotate-to: 0deg;
}

.clock-center {
  height: 100%;
  width: 100%;
  background-color: var(--primary-color);
  box-shadow: 0.4rem 0 0.8rem 0 var(--shadow-color);
  -webkit-box-shadow: 0.4rem 0 0.8rem 0 var(--shadow-color);
  -moz-box-shadow: 0.4rem 0 0.8rem 0 var(--shadow-color);
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas:
    '. . . n12 . . .'
    '. . n11  . n1 . .'
    '. n10 . . . n2 .'
    'n9 . . . . . n3'
    '. n8 . . . n4 .'
    '. . n7 . n5 . .'
    '. . . n6 . . .';
}

.number-1 {
  grid-area: n1;
  justify-self: end;
  align-self: start;
}
.number-2 {
  grid-area: n2;
  justify-self: end;
  align-self: start;
}
.number-3 {
  grid-area: n3;
  justify-self: start;
}
/* ...12个 */

.clock-top {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hours-container {
  position: relative;
  z-index: 1;
  filter: drop-shadow(0.1rem 0 0.6rem var(--shadow-color));
  -webkit-filter: drop-shadow(0.1rem 0 0.6rem var(--shadow-color));
}

.hours-pointer {
  background-color: var(--clock-my-color);
  clip-path: polygon(
    -10% -10%,
    32% -10%,
    50% 50%,
    68% -10%,
    110% -10%,
    110% 110%,
    -10% 110%
  );
}

.sec-container:before {
  content: '';
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 50%;
  background-color: var(--clock-my-color);
  z-index: 2;
}

.sec-container:after {
  content: '';
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  border: 0.2rem solid var(--primary-color);
  border-radius: 50%;
  background-color: #fff;
  z-index: 1;
}

.min-pointer {
  position: absolute;
  bottom: -1.5rem;
  height: 14rem;
  width: 0.2rem;
  border-radius: 0.15rem;
  background-color: #fff;
  box-shadow: 0.4rem 0.1rem 0.8rem 0.1rem var(--shadow-color);
  -webkit-box-shadow: 0.4rem 0.1rem 0.8rem 0.1rem var(--shadow-color);
  -moz-box-shadow: 0.4rem 0.1rem 0.8rem 0.1rem var(--shadow-color);
  z-index: 0;
}

/*
-- Working
*/
.working .sec-container {
  transform: rotateZ(var(--s-rotate-from));
  animation: rotate-seconds var(--s-rotate-time) infinite linear;

}

.working .min-container {
  transform: rotateZ(var(--m-rotate-from));
  animation: rotate-minutes var(--m-rotate-time) infinite linear;

}

.working .hours-pointer {
  transform: rotateZ(var(--h-rotate-from));
  animation: rotate-hours var(--h-rotate-time) infinite linear;

}

@keyframes rotate-seconds {
  from {
    transform: rotateZ(var(--s-rotate-from));
  }
  to {
    transform: rotateZ(var(--s-rotate-to));
  }
}

@keyframes rotate-minutes {
  from {
    transform: rotateZ(var(--m-rotate-from));
  }
  to {
    transform: rotateZ(var(--m-rotate-to));
  }
}

@keyframes rotate-hours {
  from {
    transform: rotateZ(var(--h-rotate-from));
  }
  to {
    transform: rotateZ(var(--h-rotate-to));
  }
}


```

```js
import React, { useEffect } from 'react';
import clockStyles from './index.module.css';
import classnames from 'classnames'

const clockLists = [0,1,2,3,4,5,6,7,8,9,10,11]

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

```
