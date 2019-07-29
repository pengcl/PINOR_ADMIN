export function getIndex(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i;
    }
  }
}

export function formatQuery(query) {
  let str = '';
  for (const key in query) {
    if (str) {
      str = str + '&' + key + '=' + (query[key] === undefined ? '' : query[key]);
    } else {
      str = '?' + key + '=' + (query[key] === undefined ? '' : query[key]);
    }
  }
  return str;
}
