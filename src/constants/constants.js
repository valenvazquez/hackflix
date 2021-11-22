const ratingClass = [
  "bad",
  "bad",
  "bad",
  "bad",
  "regular",
  "regular",
  "good",
  "good",
  "excellent",
  "excellent",
];
const movieDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const rmin = minutes % 60;
  return `${hours ? hours + " h " : ""}${rmin ? rmin + " min " : ""}`;
};

export { ratingClass, movieDuration };
