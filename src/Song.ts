export class Song {
    private _title!: string

    constructor(title: string) {
        this.title = title
    }

    get title() {
        return this._title
    }

    set title(songTitle) {
        this._title = songTitle
    }
}