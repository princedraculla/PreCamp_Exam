function findAnagram(str1 , str2){
    // str1 = str1.toLowerCase();
    // str2 = str2.toLowerCase();
    if (str1.length !== str2.length) return
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}
console.log(findAnagram('hello','lehol'));