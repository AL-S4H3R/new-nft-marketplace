//art pieces
import steve1 from './assets/artist/steve_johnson_1.jpg'
import alex1 from './assets/artist/alex_schim_1.jpg'
import henrik1 from './assets/artist/henrik_don_1.jpg'
import pixie1 from './assets/artist/content_pixie_1.jpg'

//hot nfts
import cam1 from './assets/artist/cam_barnes_1.jpg'
import gary1 from './assets/artist/gary_butterfield_1.jpg'
import jon1 from './assets/artist/jon_tyson_1.jpg'
import sunyu from './assets/artist/sunyu_1.jpg'

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor porttitor est, at blandit velit iaculis eu.`

export const data = {
    topArtists: [
        {
            name: 'Steve Johnson',
            image: steve1,
            bio: loremIpsum
        },
        {
            name: 'Alex Schimmek',
            image: alex1,
            bio: loremIpsum
        },
        {
            name: 'Henrik Donnestad',
            image: henrik1,
            bio: `
            It came with a wave, and washed slowly ashore. 
            `
        },
        {
            name: 'Content Pixie',
            image: pixie1,
            bio: loremIpsum
        }
    ],

    hottestNfts : [
        {
            name: 'NFT 1',
            by: 'Cameron Barnes',
            description: loremIpsum,
            price: '3.00',
            image: cam1 
        },
        {
            name: 'NFT 2',
            by: 'Gary Butterfield',
            description: loremIpsum,
            price: '4.51',
            image: gary1
        },
        {
            name: 'NFT 3',
            by: 'Jon Tyson',
            description: loremIpsum,
            price: '1.55',
            image: jon1
        },
        {
            name: 'NFT 4',
            by: 'Sunyu ',
            description: loremIpsum,
            price: '8.06',
            image: sunyu
        },
        {
            name: 'NFT 1',
            by: 'Cameron Barnes',
            description: loremIpsum,
            price: '3.00',
            image: cam1 
        },
        {
            name: 'NFT 2',
            by: 'Gary Butterfield',
            description: loremIpsum,
            price: '4.51',
            image: gary1
        },
        {
            name: 'NFT 3',
            by: 'Jon Tyson',
            description: loremIpsum,
            price: '1.56',
            image: jon1
        },
        {
            name: 'NFT 4',
            by: 'Sunyu ',
            description: loremIpsum,
            price: '8.06',
            image: sunyu
        },
    ]
}