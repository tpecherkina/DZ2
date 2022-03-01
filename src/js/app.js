import GameSavingLoader from './GameSavingLoader';


(async () => {
try {
  const response = await GameSavingLoader.load();
  } catch (error) {
  console.log(error);
  }
})();