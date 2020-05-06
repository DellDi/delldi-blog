---
id: btn
title: 按钮
---

组件引入位置`../src/components/ReactBtnList/index.jsx`


import BoxCenter from '../src/components/BoxCenter/index.jsx'
import Button from '../src/components/ReactBtnList/index.jsx'
import { HoverButton } from '../src/components/ReactBtnList/index.jsx'
import ShineButton  from '../src/pages/components/ShineButton/index.jsx'

<Button>默认按钮</Button>
<Button color="red">红色按钮</Button>
<Button color="black">黑色按钮</Button>
<Button type="secondary">线框按钮</Button>
<Button color="red" type="secondary">红色按钮</Button>
<Button color="black" type="secondary">黑色按钮</Button>

---
### DefaultButton
- 默认的Button组
```jsx
import React from "react";
import styles from "./style.module.css";
import className from "classnames";

export default function Button({ children, color , type= "primary" }) {
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

```

---
### HoverButton
<HoverButton />

```jsx
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
```

### ShineButton
<BoxCenter>
  <ShineButton />
</BoxCenter>
---

```jsx
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

```