// Javascript is Syncronous single threaded language

// AJAX - async


// Javascript runs in "excecution context"

// Every Javascript func will run in different "excecution context"




var User = ["AA", "BB", "CC", "DD"]
console.log("User",User)


User.pop() // removes last element
console.log("UserAfterPop",User)

// String to Array convert
// it's not possible from normal array, we can do it from array object

let NameList = Array.from("Hyderabad") 
console.log(NameList)

// Creating new Array object
let DellArr = new Array()
DellArr.push("T")
DellArr.push("E")
DellArr.push("L")
DellArr.push("A")
DellArr.push("N")
DellArr.push("M")
console.log("DellArr",DellArr)

// Fill "A" from in indexes 2,3,4 . 
// so we need to use range 2-5
// start value is inclusive, 5 is exclusive
DellArr.fill("A", 2, 5)
console.log("DellArr After fill",DellArr)
// if we did't specify start and end (2,5) , then it will fill entire array


//Slice
var UserX = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH"]
console.log("sliceX",UserX.slice(1,4))  // start value is inclusive, 5 is exclusive
// Another
console.log("sliceX2End",UserX.slice(1))  // start value is inclusive till end


var UserY = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH"]

//Splice
UserY.splice(1,3,"Deer")
// startcount = 1 , deletecount = 3 , 
// "BOB" = it may be list of items to be inserted inplace of deleted items
console.log("UserY.Splice", UserY)

//Another example
Colors = ["Red", "Blue", "white", "Dark", "M"]
Colors.splice(1,2,"A","B","C","D")
console.log("ColorsX",Colors)
// Previously we passed "Deer" only now we passed "A","B","C","D" 
// set of values, it will be inserted inplace of deleted items

// =============OBjects---------------



