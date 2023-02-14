import { Artist } from "./Artist"
import { User } from "./User";
import { Song } from "./Song";
import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { LocalImporter} from "./LocalImporter";
import { CloudImporter} from "./CloudImporter";
import { PlaylistImporter } from "./PlaylistImporter";

let artist = new Artist("Muse");
let album = new Album("The Znd Law", artist, 2012);
let song = new Song("Madness");
album.addTrack(song);
let playlist = new Playlist("Fun songs");
playlist.addAlbum(album);

let localPlaylistImporter = new PlaylistImporter(
new LocalImporter("database.json")
);

let cloudPlaylistImporter = new PlaylistImporter(
new CloudImporter("www.youtube.com")
);

let localPlaylist = localPlaylistImporter.importPlaylist();
let cloudPlaylist = cloudPlaylistImporter.importPlaylist();
let user = new User("john123","password123");

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);
console.log("Getting Playlists...");
console.log(user.getPlaylists());
console.log("Getting Albums...");
console.log(user.getAlbums);
console.log("Getting Songs...");
console.log(user. getSongs());