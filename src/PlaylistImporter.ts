import { IImportable } from "./interfaces";
import { Playlist } from "./Playlist";

export class PlaylistImporter{
    private _importer: IImportable

    constructor(importer: IImportable) {
        this._importer = importer
    }

    importPlaylist(): Playlist {
        let playlist = this._importer.loadPlaylist();
        return playlist
    }
}