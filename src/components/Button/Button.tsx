import { type ReactNode } from "react";
import "./button.css"

interface BtnCharacteristics {
    variant: 'nav' | 'primary' | 'secondary',
    isActive: boolean,
    isDisabled?: boolean
    children: ReactNode
  }
  
  
  function Button ({variant, isActive, isDisabled, children}: BtnCharacteristics) {
      return (
        <>
          <button className={`${variant} ${isActive} ${isDisabled}`}>{children}</button>
        </>
      )
  }
  
  export default Button;