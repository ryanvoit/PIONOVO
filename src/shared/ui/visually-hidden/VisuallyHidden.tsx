import clsx from "clsx"
import styles from "./VisuallyHidden.module.css"
import type { VisuallyHiddenProps } from "./VisuallyHidden.props"

export default function VisuallyHidden({ children, className, as: Tag = "span" }: VisuallyHiddenProps) {
    return (
        <Tag className={clsx(styles["visually-hidden"], className)}>
            {children}
        </Tag>
    )
}
