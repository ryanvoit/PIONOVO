import type { Address } from "../config/content"

/** Ссылка на карту по адресу локации */
export const getMapLink = ({ city, address }: Address) =>
    `https://yandex.ru/maps/?text=${encodeURIComponent(`${city}, ${address}`)}`

/** Подпись локации для интерфейса: «Город, улица; Метро «Станция»» */
export const formatAddress = ({ city, address, metro }: Address) =>
    `${city}, ${address}; Метро «${metro}»`
