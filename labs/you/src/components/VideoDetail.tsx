import React from 'react';
import {ViseoDetailProps} from './Types';


const VideoDetail: React.FC<ViseoDetailProps> = ({ video }) => {
    if (!video) return <div>Loading...</div>;
    const {
        videoId
    } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"/>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};


export default VideoDetail;
