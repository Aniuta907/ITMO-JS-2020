import { Video} from "youtube-api-search-typed";

export type SeacrhBarProps = {
    onSearchTermChange: (term: string) => void,
    dfltVl:string
}

export type SearchBarState = {
    term: string
}

export type ViseoDetailProps = {
    video: null | Video
}


export type VideoListProps = {
    videos: Array<Video>,
    onVideoSelect: (video: Video) => void
}


export type VideoListItemProps = {
    video: Video,
    onVideoSelect: (video: Video) => void

}
