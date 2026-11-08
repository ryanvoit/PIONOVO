import type { ChangeEventHandler } from "react"

export interface CustomInputProps {
    btnType: 'email' | 'password' | 'text',
    role: 'email' | 'password' | 'user' | 'search',
    placeholder: string,
    id: string,
    setter?: (value: string) => void,
    name?: string,
    onBlur?: ChangeEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorMessage?: string
}
