
function renderAlbums(albums) 
{
    let artistInfo = albums.map(parseAlbums).join('');

    return `
        <div class="text-center mt-5">
            <div class="playlist_block">
                <div>
                ${artistInfo}
                </div>
            </div>
        </div>
    `
}

function parseAlbums(searchAlbums)
{
    let albumHTML = "";
    for (let i = 0; i < searchAlbums.albums.length; i++) {
        let albumSongHTML = "";
        for (let j = 0; j < searchAlbums.albums[i].songs.length; j++) {
            albumSongHTML += `
            <div class="song_title"><img class="play_button" src=""/>${searchAlbums.albums[i].songs[j].title}</div>
            <div class="song_length">${searchAlbums.albums[i].songs[j].length}</div>
            `
        }
        albumHTML +=  `
        <div class="album_title"><img class="album_cover" src="${searchAlbums.albums[i].albumCover}"/>${searchAlbums.albums[i].title}</div>
        <hr>` + albumSongHTML;
    }
    return albumHTML
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}