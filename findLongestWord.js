const str = " 1hi this is Md Touhidul Islam1 ";

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  const splited = str.split(" ");
  const sortedData = splited.sort((a, b) => b.length - a.length);

  return sortedData[0];
};

console.log(findLongestWord(str));
