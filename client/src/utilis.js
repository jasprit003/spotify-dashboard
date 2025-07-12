export function formatNum(num) {
  // let newStr = num.toString();
  // let count = newStr.length - 1;
  // let result = '';

  // for (let i = 1; i <= newStr.length; i++) {
  //   if (i === 3 || i === 6) {
  //     // return 2;
  //     result += ', ';
  //     // count = count - 1;
  //   }
  //   result = result.concat(newStr[count]);
  //   count = count - 1;
  // }
  return num.toLocaleString();
}
// 593,
40991;

// const revStr = [...newStr].reverse().join('');
// return newStr;

// export function toMinutes(num) {
//   // const ms = 0.0000166667;
//   let result = '';

//   let str = (num / 60000).toString();

//   let minutes = str.split('.');

//   // let seconds = Math.round(((num - 2) * 60000) / 1000);
//   let seconds = num - (2 * 60000);

//   result += minutes[0].concat(':').concat(seconds);

//   return result;
// }

export function toMinutes(num) {
  // Convert milliseconds to total seconds
  const totalSeconds = Math.floor(num / 1000);

  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Format seconds to always be 2 digits (e.g., "05" instead of "5")
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Return the formatted string
  return `${minutes}:${formattedSeconds}`;
}

export function getRandom(num) {
  return Math.floor(Math.random(num) * 100) + num;
}
