import React, { Component } from 'react'
import ArtistBanner from '../components/ArtistBanner';
import ArtistPlaylist from '../components/ArtistPlaylist';
import SimilarArtist from '../components/SimilarArtist';
import AudioPlayer from '../components/AudioPlayer';
import '../Artistpage.css';
export default class ArtistPage extends Component {
    render() {
        return (
            <div>
            <main>
             <ArtistBanner />
             <ArtistPlaylist />
            </main>
             <SimilarArtist />
             <AudioPlayer /> 
             </div>
        )
    }
}
