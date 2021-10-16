type CityStreetType = {
    title: string
}

type CityAdressType = {
    number: number
    street: CityStreetType
}

type housesType = {
    buildedAt: number
    repaired: boolean
    address: CityAdressType,


}

export type cityType = {
    title: string
    houses: Array<housesType>
    govBuildings: Array<string>
    citizenNumber: number
}

