type peopleType = {
    id: number
    name: string
    age: number
}

export const people: Array<peopleType> = [
    {id: 1, name: 'Dasha Samsonovich', age: 22},
    {id: 2, name: 'Sasha Alex', age: 25},
    {id: 3, name: 'Vala Hala', age: 26}
]

type manType = {
    stack: Array<string>
    firstName: string
    lastName: string
}

const transformToDev = (man: peopleType) => ({
    stack: ['html', 'css', 'react', 'redux', 'javascript', 'typescript'],
    firstName: man.name[0].split(' '),
    lastName: man.name[1].split(' ')
})

export const devs = people.map(transformToDev)

export const helloWords = (people: Array<peopleType>) => {
    let res = people.map((man: peopleType) => 'Hello, ' + man.name + '!');
    return res;
}