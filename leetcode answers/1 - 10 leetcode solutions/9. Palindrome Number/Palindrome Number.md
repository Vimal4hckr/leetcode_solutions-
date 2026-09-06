Approach
The solution reverses the given number and compares the reversed number with the original number.

The main steps are:

Check negative
    ↓
Store original number
    ↓
Reverse the number
    ↓
Compare original and reverse
    ↓
Return true or false
Step-by-Step
First, the code checks whether the number is negative.

If:
x < 0

it immediately returns:
false

A negative number is not considered a palindrome.
The original value of x is stored in original.
This is important because x will be changed while reversing it.

For example:
original = 121
x = 121
reverse is initialized to 0.

It will store the reversed number.

The while loop continues until x becomes 0.
The last digit of x is obtained using:

x % 10

For example:
121 % 10 = 1
The last digit is added to reverse using:

reverse = reverse * 10 + x % 10

For 121:
reverse = 0 * 10 + 1
        = 1

reverse = 1 * 10 + 2
        = 12

reverse = 12 * 10 + 1
        = 121
The last digit is removed from x using:
x /= 10

So:
121 → 12 → 1 → 0
Once the loop finishes, the original number and reversed number are compared.

original == reverse

If they are equal, the number is a palindrome.
Example

Input:
x = 121

Processing:
Original = 121

Reverse:
121 → 1
12  → 12
1   → 121

Original = 121
Reverse  = 121
121 == 121

Answer:
true
Example 2

Input:
x = 123

Reverse:
321

Comparison:
123 != 321

Answer:
false
Example 3

Input:
x = -121

The first condition detects that the number is negative:
x < 0

Therefore:
false
is returned immediately.
Important Concept

The key logic is:
Extract last digit → Add it to reverse → Remove last digit → Repeat → Compare with original.

Complexity
Time Complexity: O(log₁₀ n)
The number of iterations depends on the number of digits.
Space Complexity: O(1)
Only a few variables are used.