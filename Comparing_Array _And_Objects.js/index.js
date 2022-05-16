 let arr1=[1,2,3,4];
 let arr2=[1,2,3,4];
 console.log(arr1.toString())
 console.log(arr1.toString()===arr2.toString())

 let obj1= {'a':1,'b':2};
 let obj2= {'a':1,'b':2};
 console.log(JSON.stringify(obj1));
 console.log(JSON.stringify(obj1)===JSON.stringify(obj2))

 let arr3=[1,2,3,4];
 let arr4=[1,2,4,3];
 console.log(arr3.toString())
 console.log(arr3.toString()===arr4.toString())



 //creating function for comparing arrays 

 let compare = (arr1,arr2)=>{
     if(!arr1||!arr2){
         return false;
     }
     if(arr1.length!= arr2.length){
         return false;
      }

      for (let i=0 ; i<arr1.length ; i++){
          if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
              result = compare(arr1[i],arr2[i]);
          }
          else if(arr1[i]==arr2[i]){
              result=true;
          }
          else{
              result = false;
          }

          if(!result){break;}
      }
      return result;
    }

    let arr5=[5,6,7,8]
    console.log(compare(arr1,arr2))
    console.log(compare(arr3,arr4))
    console.log(compare(arr1,arr5))