import clsx from "clsx"
import styles from "./Button.module.css"
import type { ButtonProps } from "./Button.props"

export function Button({ children, className, variant, ...rest }: ButtonProps) {
    return (
        <button
            type="button"
            className={clsx(
                styles.btn,
                variant === "secondary" && styles["btn--secondary"],
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    )
}
