import type { ElementType, ReactNode } from "react"

export interface VisuallyHiddenProps {
    children: ReactNode
    className?: string
    as?: ElementType
}
