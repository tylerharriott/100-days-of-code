# LeetCode

## Two Sum

* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

* You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```


```java 
class Solution {
       public static int[] twoSum(int[] nums, int target) {

        int[] temp = new int[2];

        for(int x=0;x<nums.length;x++){

            for(int y=x+1;y<nums.length;y++){

                int value = nums[x] + nums[y];
                if(value == target){

                    temp[0] = x;
                    temp[1] = y;
                    return temp;

                }

            }


        }

        return temp;
    }
}
```
