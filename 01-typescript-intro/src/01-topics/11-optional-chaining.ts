

export interface Passenger{
    name: string,
    children?: string[]
}

const passenger1: Passenger = {
    name: "Michael"
}

const passenger2: Passenger = {
    name: "Bryang",
    children: ['Sara', 'Sofia', 'Sebastian']
}

const returnChildren = (passenger: Passenger): number =>  {

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);
  
    return howManyChildren || 0;
} 

returnChildren(passenger1);