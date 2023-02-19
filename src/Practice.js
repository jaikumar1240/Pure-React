let str = 'abbcdabcdefg';
let checkArr = [];
let maxLen = 0;
for (let i = 0; i < str.length; i++) {
    if (checkArr.includes(str[i])) {
        // console.log(i);
        if(i>maxLen) maxLen = i;
        console.log(str);
        console.log('------');
        str = str.slice(i)
        checkArr = [];
        console.log(str);
        i=0;
    }
    else {
        checkArr.push(str[i]);
    }
}
console.log(checkArr)
