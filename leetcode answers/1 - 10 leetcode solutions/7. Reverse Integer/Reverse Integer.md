Approach
The solution extracts the digits one by one from the end of the number and builds the reversed number.
It uses:

rev → stores the reversed number
digit → stores the last digit of the current number
x → gets smaller as its last digit is removed
Step-by-Step
rev is initialized to 0.
This variable will store the reversed number.

The while loop continues as long as x is not 0.
The last digit of x is obtained using:
x % 10

For example:
x = 123
123 % 10 = 3
So the last digit is 3.
That digit is added to rev.

The logic is:
rev = rev * 10 + digit

For example:
rev = 12
digit = 3

rev = 12 * 10 + 3
    = 123

Multiplying rev by 10 shifts its existing digits to the left and creates space for the new digit.
The last digit is removed from x using:
x /= 10

For example:
123 / 10 = 12
12 / 10  = 1
1 / 10   = 0
Example

For:
x = 123

Execution:
x = 123
digit = 3
rev = 3

x = 12
digit = 2
rev = 32

x = 1
digit = 1
rev = 321

x = 0
stop

Answer:
321
Negative Number
The same logic also works with negative numbers.

For:
x = -123
The digits are processed as:
-123 → -12 → -1 → 0

The result becomes:
-321
Why long Is Used?

The code uses:
long rev = 0
because the reversed value might become larger than the maximum value allowed for an int.

Java's int range is:
Integer.MIN_VALUE = -2147483648
Integer.MAX_VALUE = 2147483647

So after reversing, the code checks:
rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE
If the reversed number is outside this range, it returns:
0

Example of Overflow
Suppose reversing a number produces:
9646324351
This is greater than:
2147483647

Therefore:
return 0
Key Idea to Remember
Get last digit → Add it to reversed number → Remove last digit → Repeat → Check integer range.
Complexity

Time Complexity: O(log₁₀ n)
The number of iterations depends on the number of digits.
Space Complexity: O(1)
Only a few variables are used.