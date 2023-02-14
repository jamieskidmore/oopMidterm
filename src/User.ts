import { Album } from "./Album";
import { Artist } from "./Artist";
import { Playlist } from "./Playlist";

export class User {
    private _username!: string;
    private _password!: string;
    private _playlists!: Playlist[]
    private _albums!: Album[]

  
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password
        this._playlists = []
        this._albums = []
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    set username(theUsername: string) {
        this._username = theUsername;
        }
    

    set password(thePassword: string) {
        this._password = thePassword
    }

    addPlaylist(playlist: Playlist) {
        this._playlists.push(playlist)
    }

    addAlbum(album: Album) {
        this._albums.push(album)
    }

    getSongs() {
        const songs = []
        for (const album of this._albums) {
            songs.push(album.tracks)
            return songs
        }
    }

    getAlbums() {
        return this._albums
    }

    getPlaylists() {
        return this._playlists
    }
}