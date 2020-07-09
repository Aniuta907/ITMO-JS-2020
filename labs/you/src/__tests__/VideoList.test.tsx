import React from 'react';
import VideoList from '../components/VideoList';
import VideoListItem from "../components/VideoListItem";
import {mount} from 'enzyme';
describe('VideoList tests', () => {
    const Video = {
        etag: '',
        id: {
            videoId: '2',
            kind: ''
        },
        kind: '',
        snippet: {
            title: 'My text',
            description: 'My description',
            channelId: '',
            channelTitle: '',
            liveBroadcastContent: '',
            publishedAt: '',
            thumbnails: {
                default: {
                    url: '',
                    height: 100,
                    width: 100
                },
                high: {
                    url: '',
                    height: 100,
                    width: 100
                },
                medium: {
                    url: '',
                    height: 100,
                    width: 100
                }
            }
        }
    }

    test('Check number of videos is equal to videos array length', () => {
        const props = {
            videos: [...Array(3).keys()].map(index => Video)
        }
        const wrapper = mount(<VideoList {...props} />);
        expect(wrapper.find(VideoListItem).length).toBe(3);
    });

})
