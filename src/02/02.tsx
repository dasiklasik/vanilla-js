type technologiesType = {
    id: number
    title: string
}

type AddressType = {
    country: string
    city: string
    street: string
}

type StudentType = {
    name: string
    age: number
    address: AddressType
    technologies: Array<technologiesType>
}

export const student: StudentType = {
    name: 'Dasha',
    age: 22,
    address: {
        country: 'Belarus',
        city: 'Minsk',
        street: 'Russianova'
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]
}