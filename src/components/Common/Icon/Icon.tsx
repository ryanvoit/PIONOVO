import { FC } from "react"

export interface IconProps {
    role: 'email' | 'password' | 'user' | 'telegram' | 'vk' | 'ok' | 'youtube' | 'star' | 'star--little' | 'heart' | 'renew' |
    'back' | 'cross' | 'search' | 'user--profile' | 'heart--profile',
    className: string
}

export const Icon: FC<IconProps> = ({ role, className }) => {
    // switch (role) {
        ///
    // }

    return (
        <div>
            ffff
        </div>
    )
}