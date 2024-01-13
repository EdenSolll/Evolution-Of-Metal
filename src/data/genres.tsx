import { s3, config } from '../../s3.tsx'

function getUrl(id: string) {
    var params = {
        Bucket: config.bucket,
        Key: id,
        ResponseContentType: 'audio/mpeg',
    }
    return s3.getSignedUrl('getObject', params)
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
const WhentheSunDranktheWeightofWater = getUrl(
    'WhentheSunDranktheWeightofWater.mp3'
)
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
const ThisIsTheWar = getUrl('ThisIsTheWar.mp3')

const Genres = [
    {
        genre: 'Death Metal',
        startedYear: 1984,
        parentGenres: ['Thrash Metal'],
        childGenres: ['Brutal'],
        yAxis: 100,
        songs: [
            {
                year: 1984,
                title: 'Death Metal',
                artist: 'Possessed',
                src: DeathMetal,
            },
            {
                year: 1985,
                title: 'Necromancer',
                artist: 'Sepultura',
                src: Necromancer,
            },
            {
                year: 1986,
                title: 'Messiah',
                artist: 'Messiah',
                src: Messiah,
            },
            {
                year: 1987,
                title: 'Deathrash',
                artist: 'Sarcófago',
                src: Deathrash,
            },
            {
                year: 1988,
                title: 'Leprosy',
                artist: 'Death',
                src: Leprosy,
            },
            {
                year: 1989,
                title: 'Immortal Rites',
                artist: 'Morbid Angel',
                src: ImmortalRites,
            },
            {
                year: 1990,
                title: 'Left Hand Path',
                artist: 'Entombed',
                src: LeftHandPath,
            },
            {
                year: 1991,
                title: 'Override Of The Overture',
                artist: 'Dismember',
                src: OverrideOfTheOverture,
            },
            {
                year: 1992,
                title: 'The IVth Crusade',
                artist: 'Bolt Thrower',
                src: TheIVthCrusade,
            },
            {
                year: 1993,
                title: 'When the Sun Drank the Weight of Water',
                artist: 'Demilich',
                src: WhentheSunDranktheWeightofWater,
            },
            {
                year: 1994,
                title: 'For Victory',
                artist: 'Bolt Thrower',
                src: ForVictory,
            },
            {
                year: 1995,
                title: 'Sorcery',
                artist: 'Kataklysm',
                src: Sorcery,
            },
            {
                year: 1996,
                title: 'Burn With Jesus',
                artist: 'Immolation',
                src: BurnWithJesus,
            },
            {
                year: 1997,
                title: 'I Am God',
                artist: 'Vital Remains',
                src: IAmGod,
            },
            {
                year: 1998,
                title: 'Obscura',
                artist: 'Goreguts',
                src: Obscura,
            },
            {
                year: 1999,
                title: 'Wolflust',
                artist: 'Angelcorpse',
                src: Wolflust,
            },
            {
                year: 2000,
                title: 'Decrepit Crescendo',
                artist: 'Exhumed',
                src: DecrepitCrescendo,
            },
            {
                year: 2001,
                title: 'Annihilation',
                artist: 'Rebaelliun',
                src: Annihilation,
            },
            {
                year: 2002,
                title: 'Pit of Zombies',
                artist: 'Cannibal Corpse',
                src: PitOfZombies,
            },
            {
                year: 2003,
                title: 'Remembrance',
                artist: 'Gojira',
                src: Remembrance,
            },
            {
                year: 2004,
                title: 'Eaten',
                artist: 'Bloodbath',
                src: Eaten,
            },
            {
                year: 2005,
                title: 'This Is The War',
                artist: 'Vader',
                src: ThisIsTheWar,
            },
            {
                year: 2006,
                title: 'Alchemy Of The Black Sun Cult',
                artist: 'Goatwhore',
                src: AlchemyOfTheBlackSunCult,
            },
            {
                year: 2007,
                title: 'Song 25',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2008,
                title: 'Song 26',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2009,
                title: 'Song 27',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2010,
                title: 'Song 28',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2011,
                title: 'Song 29',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2012,
                title: 'Song 30',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2013,
                title: 'Song 31',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2014,
                title: 'Song 32',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2015,
                title: 'Song 33',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2016,
                title: 'Song 34',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2017,
                title: 'Song 35',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2018,
                title: 'Song 36',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2019,
                title: 'Song 37',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2020,
                title: 'Song 38',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2021,
                title: 'Song 39',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2022,
                title: 'Song 40',
                artist: 'Artist',
                src: Deathrash,
            },
            {
                year: 2023,
                title: 'Song 41',
                artist: 'Artist',
                src: Deathrash,
            },
        ],
    },
]
export default Genres
