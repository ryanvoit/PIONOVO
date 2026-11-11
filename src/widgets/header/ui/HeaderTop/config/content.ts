export interface Address { 
    city: string; 
    address: string; 
    metro: string
}

export interface LocationsSet { main: Address; branches: Address[] }

export const LOCATIONS: LocationsSet = {
    main: { city: 'Санкт-Петербург' , address: 'Проспект Обуховской обороны, 73', metro: 'Елизаровская' },
    branches: [
        // { city: 'Санкт-Петербург' , address: '5-я Советская, 16', metro: 'Площадь Восстания' }
    ]
}
