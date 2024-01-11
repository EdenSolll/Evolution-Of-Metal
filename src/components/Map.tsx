import { useEffect, useMemo, useRef } from 'react'
import L, { ImageOverlay, Map } from 'leaflet'
import Genres from '../data/genres'
import './map.css'
import { useTrackState } from './TrackContext'

// Define interfaces
interface Song {
    id: string
    year: number
    title: string
    artist: string
    src: string
}

interface Genre {
    genre: string
    startedYear: number
    parentGenres: string[]
    childGenres: string[]
    yAxis: number
    songs: Song[]
}

// Define constants
const MAP_WIDTH = 540
const MAP_HEIGHT = 540
const MAX_YEAR = 2024
const MIN_YEAR = 1970

// Helper function to calculate coordinates
const calculateCoordinate = (
    year: number,
    minYear: number,
    maxYear: number,
    mapWidth: number
): number => {
    return (year - minYear) * (mapWidth / (maxYear - minYear))
}

export default function MapComponent(): JSX.Element {
    // Use refs

    const imageOverlay = useRef<ImageOverlay | null>(null)
    const mapContainer = useRef<Map | null>(null)

    //
    const { setTrack, playSong} = useTrackState();

    // Use memo to optimize performance
    const drawGenreLines = useMemo(() => {
        return (map: Map) => {
            map.eachLayer((layer) => {
                if (layer instanceof L.Polyline) {
                    map.removeLayer(layer)
                }
            })

            Genres.forEach((genre: Genre) => {
                // Draw genre lines
                drawGenreLine(genre, map)

                // Draw song lines
                drawSongLines(genre, map)
            })
        }
    }, [])

    const drawSongLines = (
        genre: Genre,
        map: Map,
    ) => {
        genre.songs.forEach((song: Song) => {
            const xCoordinateStart = calculateCoordinate(
                song.year,
                MIN_YEAR,
                MAX_YEAR,
                MAP_WIDTH
            )
            const xCoordinateEnd = calculateCoordinate(
                song.year,
                MIN_YEAR,
                MAX_YEAR,
                MAP_WIDTH
            )
            const polylineCoordinates: L.LatLngTuple[] = [
                [genre.yAxis, xCoordinateStart],
                [genre.yAxis, xCoordinateEnd + 9],
            ]

            const songline = L.polyline(polylineCoordinates, {
                color: 'blue',
                weight: 6,
            }).addTo(map)

            songline.on('click', function () {
              const trackIndex = genre.songs.indexOf(song)
              const currentTrack = Genres[0].songs[trackIndex];
              setTrack(trackIndex, currentTrack);
              playSong();
            alert(`Song ${song.title} clicked!`);
            })
        })
    }

    // Setup map and handle side effects
    //
    useEffect(() => {
     if (!mapContainer.current) {
       try {
         const map = setupMap()

         if (imageOverlay.current) {
           map.removeLayer(imageOverlay.current)
         }

         imageOverlay.current = addImageOverlay(map)

         drawGenreLines(map)

         const yearLayers = addYearMarkers(map)

         handleZoomEvents(map, yearLayers)

         map.fire('zoomend')
         mapContainer.current = map
       } catch (error) {
         console.error(
           'There has been a problem with your fetch operation:',
           error
         )
       }
     }
    }, [])

    return (
        <div
            id="map"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: 'calc(100vh - 60px)',
                width: '100%',
            }}
        />
    )
}

function drawGenreLine(genre: Genre, map: Map) {
    const genreCoordinateStart = calculateCoordinate(
        genre.startedYear,
        MIN_YEAR,
        MAX_YEAR,
        MAP_WIDTH
    )
    const genreCoordinateEnd = calculateCoordinate(
        MAX_YEAR,
        MIN_YEAR,
        MAX_YEAR,
        MAP_WIDTH
    )
    const baseLineCoordinates: L.LatLngTuple[] = [
        [genre.yAxis, genreCoordinateStart],
        [genre.yAxis, genreCoordinateEnd],
    ]
    const baseLine = L.polyline(baseLineCoordinates, {
        color: 'blue',
        weight: 5,
        opacity: 0.5,
    }).addTo(map)

    const tooltip = L.tooltip({
        permanent: true,
        direction: 'top',
        sticky: true,
    }).setContent(genre.genre)

    baseLine.bindTooltip(tooltip)
}

function setupMap(): Map {
    return L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 3.5,
        zoomSnap: 0.1,
        zoomDelta: 0.1,
        attributionControl: false,
    }).setView([200, -75], 0)
}

function addImageOverlay(map: Map): ImageOverlay {
    const imageUrl =
        'https://www.metal-archives.com/images/6/6/6/6/666668.jpg?0304'
    const bounds: L.LatLngTuple[] = [
        [0, 0],
        [MAP_HEIGHT, MAP_WIDTH],
    ]

    return L.imageOverlay(imageUrl, bounds).addTo(map)
}

function addYearMarkers(map: Map) {
    const yearLayers: Record<number, L.Marker> = {}
    for (let year = MIN_YEAR; year <= MAX_YEAR; year++) {
        const yearMarker = L.marker([0, (year - MIN_YEAR) * 10], {
            icon: L.divIcon({
                className: 'leaflet-marker-icon',
                html: `<div class="year">${year}</div>`,
                iconSize: [200, 40],
                iconAnchor: [15, 0],
            }),
        }).addTo(map)

        yearLayers[year] = yearMarker
    }

    return yearLayers
}

function handleZoomEvents(map: Map, yearLayers: Record<number, L.Marker>) {
    map.on('zoomend', () => {
        const zoom = map.getZoom()

        for (let yearStr in yearLayers) {
            const year = parseInt(yearStr)
            if (zoom >= 2) {
                yearLayers[year].addTo(map)
                yearLayers[year].openTooltip()
            } else {
                if (year % 10 !== 0) {
                    yearLayers[year].removeFrom(map)
                }
            }
        }
    })
}
