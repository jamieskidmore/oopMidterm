import { Album } from "./Album"
import { Song } from "./Song";

export class Playlist {
    private _name!: string;
    private _songs!: Song[];

    constructor(name: string) {
        this.name = name
        this.songs = []
    }

    get name() {
        return this._name
    }

    get songs() {
        return this._songs;
    }
    
    set name(playlistName) {
        this._name = playlistName
    }

    set songs(song) {
        this._songs = []
    }

    addAlbum(albumName: Album) {
        for (const track of albumName.tracks) {
            this._songs.push(track)
        }
    }
}