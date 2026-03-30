import type { ReactNode } from "react";
import "./banner.css"

interface IBanner {
    variant: "withBg" | "withoutBg"
    children: ReactNode;
}

function Banner ({children, variant}: IBanner) {
    return (
        <div className={`${variant} ${"banner-info"}`}>
            {children}
        </div>
    )
}

export default Banner;