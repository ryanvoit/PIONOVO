import type { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonVariant = "primary" | "secondary"

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "className" | "children"> {
    children: ReactNode
    className?: string
    variant?: ButtonVariant
}
