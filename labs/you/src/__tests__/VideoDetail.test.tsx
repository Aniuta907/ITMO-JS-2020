import React from 'react';
import VideoDetail from '../components/VideoDetail';
import {mount} from 'enzyme';
describe('VideoDetail tests', () => {
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

    test('Check if no video show loading', () => {
        const props = {
            video: null
        }
        const wrapper = mount(<VideoDetail {...props} />);
        expect(wrapper.find('div').text()).toEqual('Loading...');
    });

    test('Check if video passed iframe and description is shown', () => {
        const props = {
            video: Video
        }
        const wrapper = mount(<VideoDetail {...props} />);
        expect(wrapper.find('iframe').length).toBe(1);
        expect(wrapper.find('.details').find('div').length).toBe(3);
    });
})
