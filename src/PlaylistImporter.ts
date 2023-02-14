import { IImportable } from "./interfaces";

export class PlaylistImporter{
    private _importer: IImportable

    constructor(importer: IImportable) {
        this._importer = importer
    }

    importPlaylist() {
        let playlist = this._importer.loadPlaylist();
        console.log(playlist)
    }
}