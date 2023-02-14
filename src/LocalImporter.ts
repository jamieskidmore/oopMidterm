import { Album } from "./Album";
import { IImportable } from "./interfaces";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class LocalImporter implements IImportable {
    private _database!: string;

    constructor(database: string) {
        this._database = database
    }

    loadPlaylist(): Playlist {
        const database = require("./database.json")
        console.log(`Your playlist at location ${this._database} will be loaded`)
        let playlist = new Playlist("name")
        for (let i = 0; i < database.albums; i++) {
            playlist.addAlbum(database.album[i])
        }
        return playlist
    }
}