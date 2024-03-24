export default function caeserCipher(string, shift) {
  //let splitString = string.split("");
  let newArray = [];
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    newArray.push(charCheck(char, shift));
  }
  let convertedArray = newArray.map((e) => String.fromCharCode(e)).join("");
  return convertedArray;
}

const charCheck = (char, shift) => {
  if (char >= 65 && char <= 90) {
    if (shift > 0) {
      return char + shift > 90 ? char + shift - 26 : char + shift;
    } else {
      return char + shift < 65 ? char + shift + 26 : char + shift;
    }
  } else if (char >= 97 && char <= 122) {
    if (shift > 0) {
      return char + shift > 122 ? char + shift - 26 : char + shift;
    } else {
      return char + shift < 97 ? char + shift + 26 : char + shift;
    }
  } else {
    return char;
  }
};
