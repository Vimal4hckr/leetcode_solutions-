Approach
The solution uses the Two Pointer technique.

We have:
i → points to the current element in nums1
j → points to the current element in nums2
k → points to the next position in the merged array
A new array called nums is created to store all elements in sorted order.
Step-by-Step
First, a new array is created with enough space for both input arrays.

The size is:
nums1.length + nums2.length
Three pointers are initialized:

i = 0 → first array
j = 0 → second array
k = 0 → merged array
The program compares the current elements of both arrays.

For example:
nums1[i] = 1
nums2[j] = 2
Since 1 < 2, 1 is placed into the merged array.

After adding an element, its pointer is moved forward.
This continues while both arrays still contain elements.
When one array becomes empty, the remaining elements of the other array are copied directly into the merged array.
Example

Suppose:
nums1 = [1,3]
nums2 = [2,4]

The comparison happens like this:
1 vs 2 → take 1
3 vs 2 → take 2
3 vs 4 → take 3
nums1 is empty → take remaining 4

Merged array:
[1,2,3,4]
Finding the Median
After merging, the total number of elements is stored in n.

If n is odd:
n % 2 == 1
There is one middle element.

For example:
[1,2,3,4,5]
The middle element is:
3
The code returns:
nums[n / 2]
If the Length Is Even
If the total number of elements is even, there are two middle elements.

For example:
[1,2,3,4]
The middle elements are:
2 and 3

The median is:
(2 + 3) / 2 = 2.5

The code uses:
(nums[n / 2 - 1] + nums[n / 2]) / 2.0
Using 2.0 ensures that Java performs decimal division instead of integer division.
Important Part

The main merging logic is:
Compare nums1[i] and nums2[j]
          ↓
Take the smaller value
          ↓
Move that pointer
          ↓
Move k
          ↓
Repeat
Example 2
nums1 = [1,2]
nums2 = [3,4]

Merged:
[1,2,3,4]

Total length:
4

Middle elements:
2 and 3

Median:
(2 + 3) / 2.0 = 2.5

Answer:
2.5
Key Idea to Remember
Merge both sorted arrays → Keep elements sorted → Find the middle element(s) → Calculate the median.

Complexity
Time Complexity: O(n + m)
Both arrays are processed once.
Space Complexity: O(n + m)
A new array is created to store all elements.