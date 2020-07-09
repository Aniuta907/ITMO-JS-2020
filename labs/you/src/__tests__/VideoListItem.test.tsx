import React from 'react';
import VideoListItem from "../components/VideoListItem";
import {mount} from 'enzyme';
describe('VideoListItem tests', () => {
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

    test('Check video is selected after click', () => {
        const props = {
            video: Video,
            onVideoSelect: jest.fn()
        }
        const wrapper = mount(<VideoListItem {...props} />);
        wrapper.find('li').simulate('click')
        expect(props.onVideoSelect).toHaveBeenCalled();
    });

})
