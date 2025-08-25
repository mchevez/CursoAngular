

const skills: string[] = ["Bash", 'counte', 'healing'];


interface ICharacter {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string 
}

const Strider: ICharacter = {

    name: 'Strider',
    hp:100,
    skills: ['Bash', 'Conte']
}

Strider.hometown= "Frodo"

console.table(Strider)

export {}