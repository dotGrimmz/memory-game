export const rndInt = () => Math.floor(Math.random() * 100) + 1;
export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
