import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data)).then((data) => {
      const gameSaved = new GameSaving(data);
      return gameSaved;
    });
  }
}
