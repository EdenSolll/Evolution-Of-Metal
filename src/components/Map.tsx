import { useEffect, useMemo, useRef } from 'react'
import L, { ImageOverlay, Map } from 'leaflet'
import Genres from '../data/genres'
import 'leaflet/dist/leaflet.css'
import './map.css'

interface Song {
    id: string
    year: number
    title: string
}

interface Genre {
    genre: string
    startedYear: number
    parentGenres: string[]
    childGenres: string[]
    yAxis: number
    songs: Song[]
}

const MAP_WIDTH = 540
const MAP_HEIGHT = 540
const MAX_YEAR = 2024
const MIN_YEAR = 1970

export default function MapComponent(): JSX.Element {
    const imageOverlay = useRef<ImageOverlay | null>(null)
    const mapContainer = useRef<Map | null>(null)

    const drawLines = useMemo(() => {
        return (map: Map) => {
            map.eachLayer((layer) => {
                if (layer instanceof L.Polyline) {
                    map.removeLayer(layer)
                }
            })

            Genres.forEach((genre: Genre) => {
              const genreCoordinateStart =
                    (genre.startedYear - MIN_YEAR) *
                    (MAP_WIDTH / (MAX_YEAR - MIN_YEAR))
                const genreCoordinateEnd =
                    (MAX_YEAR - MIN_YEAR) * (MAP_WIDTH / (MAX_YEAR - MIN_YEAR))
                const baseLineCoordinates: L.LatLngTuple[] = [
                    [genre.yAxis, genreCoordinateStart],
                    [genre.yAxis, genreCoordinateEnd],
                ]
                L.polyline(baseLineCoordinates, {
                    color: 'blue',
                    weight: 5,
                    opacity: 0.5,
                }).addTo(map)

                  const tooltip = L.tooltip({
                   permanent: true,
                   direction: 'top',
                   sticky: true,
                  }).setContent(genre.genre);

                  const baseLine = L.polyline(baseLineCoordinates, {
                   color: 'blue',
                   weight: 5,
                   opacity: 0.5,
                  }).addTo(map);

                  baseLine.bindTooltip(tooltip);
                genre.songs.forEach((song: Song) => {
                    const xCoordinateStart =
                        (song.year - MIN_YEAR) *
                        (MAP_WIDTH / (MAX_YEAR - MIN_YEAR))
                    const xCoordinateEnd =
                        (song.year - MIN_YEAR) *
                        (MAP_WIDTH / (MAX_YEAR - MIN_YEAR))
                    const polylineCoordinates: L.LatLngTuple[] = [
                        [genre.yAxis, xCoordinateStart],
                        [genre.yAxis, xCoordinateEnd + 9],
                    ]

                    const songline = L.polyline(polylineCoordinates, {
                        color: 'blue',
                        weight: 6,
                    }).addTo(map)

                    songline.on('click', function () {
                        alert(`Song ${song.title} clicked!`)
                    })
                })
            })
        }
    }, [Genres])
    useEffect(() => {
        try {
            const map = L.map('map', {
                crs: L.CRS.Simple,
                minZoom: -2,
                maxZoom: 3.5,
                zoomSnap: 0.1,
                zoomDelta: 0.1,
                attributionControl: false,
            }).setView([200, -75], 0)

            const imageUrl =
                'https://www.metal-archives.com/images/6/6/6/6/666668.jpg?0304'
            const bounds: L.LatLngTuple[] = [
                [0, 0],
                [MAP_HEIGHT, MAP_WIDTH],
            ]

            if (imageOverlay.current) {
                map.removeLayer(imageOverlay.current)
            }

            imageOverlay.current = L.imageOverlay(imageUrl, bounds).addTo(map)

            drawLines(map)

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

            map.on('zoomend', () => {
                const zoom = map.getZoom()
                console.log('Zoom level:', zoom)

                for (let yearStr in yearLayers) {
                    const year = parseInt(yearStr)
                    if (zoom >= 2) {
                        console.log('Adding year marker for year:', year)
                        yearLayers[year].addTo(map)
                        yearLayers[year].openTooltip()
                    } else {
                        if (year % 10 !== 0) {
                            console.log('Removing year marker for year:', year)
                            yearLayers[year].removeFrom(map)
                        }
                    }
                }
            })

            map.fire('zoomend')
            mapContainer.current = map
        } catch (error) {
            console.error(
                'There has been a problem with your fetch operation:',
                error
            )
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
