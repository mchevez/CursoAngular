
interface AudioPlayer {

    audioVolumen: number,
    songDuration: number,
    song: string
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheran',
        year: 2015
    }
}

const song = 'new song'

const {
    song:anotherSong, 
    songDuration:Duration,
    details 
} = audioPlayer

const { author } = details


// console.log('Song: ', anotherSong);
// console.log('Duration: ', Duration);
// console.log('Author: ', author);



const [,, trunks = 'Sin personaje']: string[] = ['Goku', 'Vegueta']

console.error('personaje 3:', trunks);