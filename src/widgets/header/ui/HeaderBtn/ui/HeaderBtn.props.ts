import type { ButtonHTMLAttributes } from "react"
import type { HeaderBtnRole } from "../config/content"

export interface HeaderBtnProps
    extends Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "type" | "className" | "children" | "role"
    > {
    role: HeaderBtnRole
    className?: string
}
