import type { ElementType, ReactNode } from "react"
import { cx } from "../../lib/cx"
import styles from "./VisuallyHidden.module.css"

export interface VisuallyHiddenProps {
    children: ReactNode
    className?: string
    as?: ElementType
}

export default function VisuallyHidden({ children, className, as: Tag = "span" }: VisuallyHiddenProps) {
    return (
        <Tag className={cx(styles["visually-hidden"], className)}>
            {children}
        </Tag>
    )
}
