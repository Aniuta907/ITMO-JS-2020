import React, {Component as Comp} from 'react';
// @ts-ignore
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import {Video} from "youtube-api-search-typed";

const API_KEY = 'AIzaSyBQsW5wYtoX1p-Ebz2dhwt1Ti1CZ621h9E';

type StateProps = {
    videos: Array<Video>,
    selectedVideo: null | Video,
    term: string
}

export default class Page extends Comp<{}, StateProps> {
    constructor(props: {}) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            term: 'Cat'
        };

        this.videoSearch(this.state.term);
    }

    videoSearch(term: string) {
        YTSearch({
                key: API_KEY,
                term
            },
            (videos: Array<Video>) => this.setState({
                videos,
                selectedVideo: videos[0]
            }));
    }

    render() {
        const videoSearch = _.debounce((term: string) => this.videoSearch(term), 300);
        return (<div>
            <SearchBar onSearchTermChange={videoSearch} dfltVl={this.state.term}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                videos={this.state.videos}
                onVideoSelect={(selectedVideo: Video) => this.setState({selectedVideo})}
            />
        </div>);
    }
}
