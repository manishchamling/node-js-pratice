const goodMorning = () => {
  console.log("Good morning");
};
const goodEvening = () => {
  console.log("Good evening");
};

const main = (first, second) => {
  const currentTime = new Date().getHours();
  console.log({ currentTime });
  if ((currentTime) => 12) {
    second
  } else {
    first
  }
};

main(`first:goodEvening, second:goodMorning`);
