const executeMethod = (obj, keys, method, params) => {
  let copyObj = { ...obj };
  let arr = keys.split(".");
  for (let i = 0; i < arr.length; i++) {
    if (copyObj[arr[i]] === undefined) return null;
    copyObj = copyObj[arr[i]];
  }
  return copyObj[method](...params);
};
module.exports = executeMethod;
