Approach
This solution uses Expand Around Center.

A palindrome has a center, so instead of checking every possible substring, we start from each possible center and expand outward.

There are two types of centers:
Odd-length palindrome → one center character
Even-length palindrome → two center characters
Step-by-Step
First, the code checks whether the string has fewer than 2 characters.
If it does, the string itself is the answer.
start and end store the starting and ending positions of the longest palindrome found so far.

Initially:
start = 0
end = 0
The for loop checks every character as a possible center.
For every position i, the code checks two possibilities.

Odd-length palindrome:
expand(s,i,i)
Both left and right start at the same character.

Example:

aba

  a
  ↑
center

Then it expands:

a b a
↑   ↑

Since both sides match, it is a palindrome.
Even-length palindrome:
expand(s,i,i+1)
Here the center is between two characters.

Example:

abba

a b b a
  ↑ ↑
 center

The two b characters form the center.
The expand() Method
The expand() method is responsible for checking how far a palindrome can expand.
It starts with left and right.

Then it checks:
left >= 0
This ensures we haven't gone outside the beginning of the string.
right < s.length()
This ensures we haven't gone outside the end.
s.charAt(left) == s.charAt(right)
This checks whether both characters are equal.
If all conditions are true, both pointers move outward:

left--
right++

The process continues until the characters don't match or the boundaries are reached.
Why right-left-1?
After the loop stops, left and right have moved one position beyond the actual palindrome.

For example:

a b a
↑   ↑

After expansion stops:

↑       ↑
left   right

So the actual palindrome length is:
right - left - 1
Comparing the Two Palindromes
For every center, the code calculates:
len1 → odd-length palindrome
len2 → even-length palindrome

Then:
len = Math.max(len1,len2)
This selects the longer palindrome around that center.

Updating the Answer
The code checks whether the newly found palindrome is longer than the current answer.
If it is longer, it updates:

start
and
end

The starting position is calculated using:
i-(len-1)/2

The ending position is calculated using:
i+len/2
This works for both odd and even-length palindromes.
Example

For:
cbbd
At the center between the two bs:

c b b d
  ↑ ↑

The expansion finds:
bb

So:
start = 1
end = 2

Finally:
substring(1,3)

returns:
bb
substring(start,end+1)
Java's substring() uses an exclusive ending index.

So if:
start = 1
end = 3

The code needs:
substring(1,4)
to include the character at index 3.
That's why the solution uses:
substring(start,end+1)
Key Idea to Remember
Choose a center → Expand left and right → Find palindrome length → Compare with maximum → Store its start and end positions.

Complexity
Time Complexity: O(n²)
Each character can expand across much of the string.
Space Complexity: O(1)
Only a few variables are used; no additional array or collection is required.