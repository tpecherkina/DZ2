import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
static async load() {
    const reader = await read();
    const inString = await json(reader);
    return new GameSaving(JSON.parse(inString));
    }
}
