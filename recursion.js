/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 1) return words[0].length;

  if(words[0].length >= words[1].length){
    words.splice(1, 1);
    return longest(words);
  }
  else{
    return longest(words.slice(1));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i >= str.length) return "";
  return str[i] + everyOther(str, i+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, adj = 0) {
  if(Math.floor(str.length / 2) === adj) return true;
  if(str[adj] !== str[str.length-adj-1]) return false;

  return isPalindrome(str, adj+1);
  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx>=arr.length) return -1;
  if(arr[idx] === val) return idx;

  return findIndex(arr, val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, adj=1) {
  if(adj > str.length) return "";
  return str[str.length - adj] + revString(str, adj+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strs=[], idx=0) {
  let values = Object.values(obj);
  console.log(values);

  if(values.length === idx) return strs;
  if(typeof values[idx] === 'object') strs = gatherStrings(values[idx], strs, 0);
  if(typeof values[idx] === "string") strs.push(values[idx]);

  return gatherStrings(obj, strs, idx+1);
  
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0) {
  if(arr[0] === val) return start;
  if(arr.length === 1) return -1;
  let middle = Math.floor(arr.length/2);

  if(arr[middle] > val) {
    return binarySearch(arr.slice(0,middle), val, middle+start);
  }
  else{
    return binarySearch(arr.slice(middle), val, start+middle);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
