function recursion(array)
{
    if (array.length>1){
        let mid = Math.floor(array.length/2),
        leftList = array.slice(0,mid),
        rightList = array.slice(mid);
        recursion(leftList)
        recursion(rightList)
    }}
    console.log(recursion([1,2,3,4,5,6,7,8,9,0]))