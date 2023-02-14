import { Artist } from "./Artist"
import { Song } from "./Song"


export class Album {
    private _title!: string
    private _artist: Artist
    private _year: number
    tracks: Song[]

    constructor(title: string, artist: Artist, year: number) {
        this.title = title
        this._artist = artist
        this._year = year
        this.tracks = []
    }

    get title() {
        return this._title
    }

    set title(titleName: string) {
        this._title = titleName
    }

    addTrack(track: Song) {
        this.tracks.push(track)
    }
}