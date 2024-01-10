import { s3, config } from '../../s3.tsx'

function getUrl(id: string) {
  var params = {
    Bucket: config.bucket,
    Key: id,
    ResponseContentType: 'audio/mpeg',
 };
  return s3.getSignedUrl('getObject', params);
}

const DeathMetal = getUrl('DeathMetal.mp3')
const Necromancer = getUrl('Necromancer.mp3')
const Messiah = getUrl('Necromancer.mp3')
const Deathrash = getUrl('Deathrash.mp3')
const Leprosy = getUrl('Leprosy.mp3')
const ImmortalRites = getUrl('ImmortalRites.mp3')
const LeftHandPath = getUrl('LeftHandPath.mp3')
const OverrideOfTheOverture = getUrl('OverrideOfTheOverture.mp3')
const TheIVthCrusade = getUrl('TheIVthCrusade.mp3')
const WhentheSunDranktheWeightofWater = getUrl('WhentheSunDranktheWeightofWater.mp3')
const ForVictory = getUrl('ForVictory.mp3')
const Sorcery = getUrl('Sorcery.mp3')
const BurnWithJesus = getUrl('BurnWithJesus.mp3')
const IAmGod = getUrl('IAmGod.mp3')
const Obscura = getUrl('Obscura.mp3')
const Wolflust = getUrl('Wolflust.mp3')
const DecrepitCrescendo = getUrl('DecrepitCrescendo.mp3')
const Annihilation = getUrl('Annihilation.mp3')
const PitOfZombies = getUrl('PitOfZombies.mp3')
const Remembrance = getUrl('Remembrance.mp3')
const Eaten = getUrl('Eaten.mp3')
const AlchemyOfTheBlackSunCult = getUrl('AlchemyOfTheBlackSunCult.mp3')

const Genres = [
    {
        genre: 'Death Metal',
        startedYear: 1984,
        parentGenres: ['Thrash Metal'],
        childGenres: ['Brutal'],
        yAxis: 100,
        songs: [
            {
                id: '0',
                year: 1984,
                title: 'Death Metal',
                artist: 'Possessed',
                src: DeathMetal,
            },
            {
                id: '1',
                year: 1985,
                title: 'Necromancer',
                artist: 'Sepultura',
                src: Necromancer,
            },
            {
                id: '2',
                year: 1986,
                title: 'Messiah',
                artist: 'Messiah',
                src: Messiah,
            },
            {
                id: '3',
                year: 1987,
                title: 'Deathrash',
                artist: 'Sarcófago',
                src: Deathrash,
            },
            {
                id: '4',
                year: 1988,
                title: 'Leprosy',
                artist: 'Death',
                src: Leprosy,
            },
            {
                id: '5',
                year: 1989,
                title: 'Immortal Rites',
                artist: 'Morbid Angel',
                src: ImmortalRites,
            },
            {
                id: '6',
                year: 1990,
                title: 'Left Hand Path',
                artist: 'Entombed',
                src: LeftHandPath,
            },
            {
                id: '7',
                year: 1991,
                title: 'Override Of The Overture',
                artist: 'Dismember',
                src: OverrideOfTheOverture,
            },
            {
                id: '8',
                year: 1992,
                title: 'The IVth Crusade',
                artist: 'Bolt Thrower',
                src: TheIVthCrusade,
            },
            {
                id: '9',
                year: 1993,
                title: 'When the Sun Drank the Weight of Water',
                artist: 'Demilich',
                src: WhentheSunDranktheWeightofWater,
            },
            {
                id: '10',
                year: 1994,
                title: 'For Victory',
                artist: 'Bolt Thrower',
                src: ForVictory,
            },
            {
                id: '11',
                year: 1995,
                title: 'Sorcery',
                artist: 'Kataklysm',
                src: Sorcery,
            },
            {
                id: '12',
                year: 1996,
                title: 'Burn With Jesus',
                artist: 'Immolation',
                src: BurnWithJesus,
            },
            {
                id: '13',
                year: 1997,
                title: 'I Am God',
                artist: 'Vital Remains',
                src: IAmGod,
            },
            {
                id: '14',
                year: 1998,
                title: 'Obscura',
                artist: 'Goreguts',
                src: Obscura,
            },
            {
                id: '15',
                year: 1999,
                title: 'Wolflust',
                artist: 'Angelcorpse',
                src: Wolflust,
            },
            {
                id: '16',
                year: 2000,
                title: 'Decrepit Crescendo',
                artist: 'Exhumed',
                src: DecrepitCrescendo,
            },
            {
                id: '17',
                year: 2001,
                title: 'Annihilation',
                artist: 'Rebaelliun',
                src: Annihilation,
            },
            {
                id: '18',
                year: 2002,
                title: 'Pit of Zombies',
                artist: 'Cannibal Corpse',
                src: PitOfZombies,
            },
            {
                id: '19',
                year: 2003,
                title: 'Remembrance',
                artist: 'Gojira',
                src: Remembrance,
            },
            {
                id: '20',
                year: 2004,
                title: 'Eaten',
                artist: 'Bloodbath',
                src: Eaten,
            },
            {
                id: '21',
                year: 2005,
                title: 'This Is The War',
                artist: 'Vader',
                src: ThisIsTheWar,
            },
            {
                id: '22',
                year: 2006,
                title: 'Alchemy Of The Black Sun Cult',
                artist: 'Goatwhore',
                src: AlchemyOfTheBlackSunCult,
            },
            {
                id: '25',
                year: 2007,
                title: 'Song 25',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '26',
                year: 2008,
                title: 'Song 26',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '27',
                year: 2009,
                title: 'Song 27',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '28',
                year: 2010,
                title: 'Song 28',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '29',
                year: 2011,
                title: 'Song 29',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '30',
                year: 2012,
                title: 'Song 30',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '31',
                year: 2013,
                title: 'Song 31',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '32',
                year: 2014,
                title: 'Song 32',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '33',
                year: 2015,
                title: 'Song 33',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '34',
                year: 2016,
                title: 'Song 34',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '35',
                year: 2017,
                title: 'Song 35',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '36',
                year: 2018,
                title: 'Song 36',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '37',
                year: 2019,
                title: 'Song 37',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '38',
                year: 2020,
                title: 'Song 38',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '39',
                year: 2021,
                title: 'Song 39',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '40',
                year: 2022,
                title: 'Song 40',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                id: '41',
                year: 2023,
                title: 'Song 41',
                artist: 'Artist',
                src: Deathrash,
            },
        ],
    },
]
export default Genres
