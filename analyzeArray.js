export default function analyzeArray(array) {
  const obj = {};
  const avg = array.reduce((a, b) => a + b) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  obj.average = avg;
  obj.min = min;
  obj.max = max;
  obj.length = array.length;
  return obj;
}
