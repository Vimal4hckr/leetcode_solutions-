Approach
The solution uses the Sliding Window technique with a HashSet.
The HashSet stores the characters currently inside the window.
We use two pointers:

left → starting position of the window
right → ending position of the window
Step-by-Step
First, a HashSet is created to store unique characters currently inside the window.
left is initialized to 0. It represents the beginning of the current substring.
max is initialized to 0. It stores the maximum length found so far.
The right pointer moves through the string from left to right.
For every character at the right position, the program checks whether that character already exists in the HashSet.
If the character already exists, there is a duplicate. The program removes the character at the left position and moves left forward.
This continues until the duplicate character is removed from the current window.
The current character is then added to the HashSet.
The current window length is calculated using:
right - left + 1
max is updated if the current window is longer than the previous maximum.
After processing the entire string, max is returned.
Example

Consider:
abcabcbb
The window starts like this:

a
a → b
a → b → c

The current maximum is 3.
When another a appears:
a → b → c → a

There is a duplicate a.
So the left pointer moves forward and removes characters until the duplicate is removed.

The window becomes:
b → c → a
Its length is still 3.

The longest substring without repeating characters is:
abc

Therefore, the answer is:
3
How the Sliding Window Works

Think of the window as:
left                 right
 ↓                     ↓
 a → b → c

When a duplicate appears:
left             right
 ↓                  ↓
 a → b → c → a

The left pointer moves forward:
     left          right
      ↓              ↓
 a → b → c → a

Then:
          left     right
           ↓         ↓
 a → b → c → a

The duplicate is removed, and the window can continue expanding.

Important Line
The most important part is:
while(set.contains(s.charAt(right)))
This ensures that the current window never contains duplicate characters.
Maximum Length
This line calculates the current window length:
right - left + 1

For example:
left = 2
right = 4

Length = 4 - 2 + 1
       = 3

Then:
max = Math.max(max, right - left + 1)
keeps the largest length found.
Key Idea to Remember
Expand the window → Detect duplicate → Move left → Remove duplicate → Continue expanding → Track maximum length.
Complexity

Time Complexity: O(n)
Each character is added and removed from the HashSet at most once.
Space Complexity: O(n)
The HashSet can store characters from the current window.