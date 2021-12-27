const _ = {
    otherClamp(number, lower, upper) { 
       return Math.max(lower, Math.min(number, upper));
    },
    testClamp(number, lower, upper) { 
        if(number < lower) {
            return lower;
        } else if (number > upper) {
            return upper;
        } else {
            return number;
        }
    },
    clamp(number, lower, upper) {
        lowerClampedValue = Math.max(number, lower);
        clampedValue =  Math.min(lowerClampedValue, upper); 
    return clampedValue;
    },
    inRange(number, start, end) {
        if(end === undefined) {
            end = start;
            start = 0;
        }
         if (start > end) {
            temp = end;
            end = start;
            start = temp;
        }
    const isInRange = (number < end && start <= number) ? true : false;

    return isInRange;
    },
    words(s){
        a = s.split(' ');
        return a;
    },
    pad(str, leng) {
        if(leng <= str.length) {
            return str;
        }
        const startPaddingLength = Math.floor((leng - str.length) / 2);
        const endPaddingLength = leng - str.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
        return paddedString;;
    },
    has(obj, key) {
        const hasValue = obj[key];
        if(hasValue != undefined) {
            return true;
        } else {
            return false;
        }
    },
    invert(obj) {
        let invertedObject = {};
        for(let key in obj) {
        const originalValue = obj[key];
          invertedObject = {originalValue : key}
        }
        return invertedObject;

    },
    findKey(obj, predicate) {
        for(const key in obj) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
        if (predicateReturnValue == true) {
            return key;
        }
        return undefined;
        }
    },
    drop(arr, n) {
        if(n === undefined) {
            n = 1;
        }
        let droppedArray = arr.slice(n, arr.length);
        return droppedArray;
    },
    dropWhile(arr, predicate) {
      const cb = (element, index) => {
          return !predicate(element, index, arr);
      };
      let dropNumber = arr.findIndex(cb);
      let droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
    },
    chunk(arr, s=1) {
        let arrayChunks = [];
        for(let i = 0; i < arr.length; i += s) {
            let arrayChunk = arr.slice(i, i+s);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
}
