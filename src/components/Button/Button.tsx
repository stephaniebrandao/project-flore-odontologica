import { type ReactNode } from "react";
import "./button.css"

interface BtnCharacteristics {
    variant: 'nav' | 'primary' | 'secondary' | 'tertiary',
    isActive: boolean,
    children: ReactNode
  }
  
  
  function Button ({variant, isActive, children}: BtnCharacteristics) {
      return (
        <>
          <button className={`${variant} ${isActive}`}>{children}</button>
        </>
      )
  }
  
  export default Button;