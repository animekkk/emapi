import { Emote } from '../emote';

export function parse(json) {
    const emotes = [];
    if(json && json.status !== 404) {
        json.forEach(emoteJson => {
            const urls = {
                '1x': emoteJson.urls[0][1],
                '2x': emoteJson.urls[1][1],
                '4x': emoteJson.urls[3][1],
            }
            emotes.push(new Emote(emoteJson.name, urls));
        });
    }
    return emotes;
}