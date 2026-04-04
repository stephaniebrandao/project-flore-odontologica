import { type ReactNode } from "react";
import styles from "./button.module.css"

interface BtnCharacteristics {
    variant: 'nav' | 'primary' | 'secondary',
    isActive: boolean,
    isDisabled?: boolean
    children: ReactNode
  }
  
  
  function Button ({variant, isActive, isDisabled, children}: BtnCharacteristics) {
      return (
        <>
          <button className={`${styles[variant]} ${isActive} ${isDisabled}`}>{children}</button>
        </>
      )
  }
  
  export default Button;