import type { ReactNode } from "react";
import styles from "./banner.module.css"

interface IBanner {
    variant: "withBg" | "withoutBg"
    children: ReactNode;
}

function Banner ({children, variant}: IBanner) {
    return (
        <div className={`${styles[variant]} ${styles.bannerInfo}`}>
            {children}
        </div>
    )
}

export default Banner;