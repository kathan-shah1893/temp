const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // Inclusive lower bound
  max = Math.floor(max); // Inclusive upper bound
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const git = simpleGit(); // Initialize simple-git

const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return git.push(); // Base case
  const x = getRandomIntInclusive(0, 54);
  const y = getRandomIntInclusive(0, 6);

  const DATE = moment()
    .subtract(1, "y")
    .subtract(3, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date: DATE };

  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, () => {
    git
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, n - 1));
  });
};

makeCommit(500); // Call makeCommit with 100 as the argument
