import clsx from "clsx"
import styles from "./Container.module.css"
import type { ContainerProps } from "./Container.props"

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={clsx(styles.container, className)}>
            {children}
        </div>
    )
}
