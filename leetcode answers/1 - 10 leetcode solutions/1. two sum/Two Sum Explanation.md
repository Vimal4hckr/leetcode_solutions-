Approach
The solution uses a HashMap to store each number along with its index.
The HashMap stores data in this format:
Number → Index
For example, if the array contains 2 at index 0, the map stores:

2 → 0

Step-by-Step
First, an empty HashMap is created to store numbers and their indices.
The program loops through the array one element at a time.

For every number, it calculates the required number by subtracting the current number from the target.

For example:

Target = 9
Current number = 2
Required number = 7
The program checks whether this required number already exists in the HashMap.
If the required number exists, it means we have found two numbers whose sum equals the target.
The index of the previously stored number is obtained from the HashMap, and the current index is returned.
If the required number does not exist, the current number and its index are stored in the HashMap.
The process continues until the pair is found.
If no valid pair exists, an empty array is returned.
Example
Input:
nums = [2, 7, 11, 15]
target = 9
Step 1:
Current number = 2
Required number = 7
7 is not in the map.
Store:
2 → 0
Step 2:
Current number = 7
Required number = 2
2 is already in the map.
Its index is 0, and the current index is 1.
So the answer is:
[0, 1]
Key Idea
Instead of checking every possible pair, the HashMap remembers the numbers we have already visited.
The main logic is:
Find the required number → Check HashMap → If found, return indices → Otherwise, store current number.
Complexity
Time Complexity: O(n)
The array is traversed only once.
Space Complexity: O(n)
The HashMap may store up to n elements.