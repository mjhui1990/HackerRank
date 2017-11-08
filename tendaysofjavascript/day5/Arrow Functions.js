/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let storage = [];
    let remainder = nums.map(s => s%2);
    for(let i = 0; i < nums.length; i++) {
        if (remainder[i] == 1) {
            storage.push(nums[i] * 3);
        }else{
            storage.push(nums[i] * 2);
              }
        }
    return storage;
}