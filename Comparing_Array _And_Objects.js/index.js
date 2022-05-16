//  let arr1=[1,2,3,4];
//  let arr2=[1,2,3,4];
//  console.log(arr1.toString())
//  console.log(arr1.toString()===arr2.toString())

//  let obj1= {'a':1,'b':2};
//  let obj2= {'a':1,'b':2};
//  console.log(JSON.stringify(obj1));
//  console.log(JSON.stringify(obj1)===JSON.stringify(obj2))

//  let arr3=[1,2,3,4];
//  let arr4=[1,2,4,3];
//  console.log(arr3.toString())
//  console.log(arr3.toString()===arr4.toString())



//  //creating function for comparing arrays 

//  let compare = (arr1,arr2)=>{
//      if(!arr1||!arr2){
//          return false;
//      }
//      if(arr1.length!= arr2.length){
//          return false;
//       }
//       arr1= arr1.sort()
//       arr2= arr2.sort()
//       for (let i=0 ; i<arr1.length ; i++){
//           if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
//               result = compare(arr1[i],arr2[i]);
//           }
//           else if(arr1[i]==arr2[i]){
//               result=true;
//           }
//           else{
//               result = false;
//           }

//           if(!result){break;}
//       }
//       return result;
//     }

//     let arr5=[5,6,7,8]
//     console.log(compare(arr1,arr2))
//     console.log(compare(arr3,arr4))
//     console.log(compare(arr1,arr5))


//     //another approach 

//     array= [1,2,{'a':1,'b':4},[3,4,5],6]
//     console.log(array.sort());

let newCompare = (current, other) => {

    let isCurrent = Object.prototype.toString.call(current);
    let isOther = Object.prototype.toString.call(current);


    //if it is not array or object
    if (['[object Array]', '[object Object]'].indexOf(currentType) == -1 || ['[object Array]', '[object Object]'].indexOf(otherType) == -1) {
        return false;

    }

    //compare the length of both 

    let currlen = isCurrent === '[object Array]' ? current.length : Object.keys(current).length;
    let otherlen = isCurrent === '[object Array]' ? other.length : Object.keys(other).length;



    //Helper function to check the equality
    let equal = (item1, item2) => {
        // Get the object type
        let itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!newCompare(item1, item2)) return false;
        } else {
            // If the two items are not the same type, return false
            if (itemType !== Object.prototype.toString.call(item2)) return false;

            // If it's a function, convert to a string and compare
            // Otherwise, just compare
            if (itemType === '[object Function]') {
                if (item1.toString() !== item2.toString()) return false;
            } else {
                if (item1 !== item2) return false;
            }
        }
    };

    // Compare properties
    if (currentType === '[object Array]') {
        for (var i = 0; i < currentLen; i++) {
            // Compare the item
            if (equal(current[i], other[i]) === false) return false;
        }
    } else {
        for (var key in current) {
            if (current.hasOwnProperty(key)) {
                // Compare the item
                if (equal(current[key], other[key]) === false) return false;
            }
        }
    }

    //If all tests are passed then
    return true
}


