import { Album } from "./Album";
import { Artist } from "./Artist";
import { IImportable } from "./interfaces";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class CloudImporter implements IImportable {
    private _database!: string;

    constructor (url: string) {
        this._database = url
    }

    loadPlaylist(): Playlist {
        console.log(`Your playlist at location ${this._database} will be loaded`)
        let pl = new Playlist("cool songs"); 
        let ldr = new Artist("lana Del Rey")
        let song = new Song ("DTYYATUOB")
        let album = new Album("DTYYATUOB", ldr, 2023)
        album.addTrack(new Song("Hello again"))
        pl.addAlbum(album);
        return pl
    }
}
