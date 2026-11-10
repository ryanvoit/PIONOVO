export interface AdvantageItem {
    id: number;
    text: string
}

export interface Address { 
    city: string; 
    address: string; 
    metro: string
}

export interface LocationsSet { main: Address; branches: Address[] }

export const ADVANTAGES: AdvantageItem[] = [
    { id: 1, text: 'Свежие пионы' },
    { id: 2, text: 'Подарки к букетам' },
    { id: 3, text: 'Работаем круглосуточно' },
    { id: 4, text: 'Доставка по Санкт-Петербургу и ЛО' },
]

export const LOCATIONS: LocationsSet = {
    main: { city: 'Санкт-Петербург' , address: 'Проспект Обуховской обороны, 73', metro: 'Елизаровская' },
    branches: [
        // { city: 'Санкт-Петербург' , address: '5-я Советская, 16', metro: 'Площадь Восстания' }
    ]
}
