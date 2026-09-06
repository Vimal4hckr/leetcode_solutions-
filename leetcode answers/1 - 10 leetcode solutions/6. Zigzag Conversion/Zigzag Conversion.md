Approach
The solution uses a StringBuilder array.
Each StringBuilder represents one row of the zigzag pattern.

For example, with 3 rows:

rows[0] → first row
rows[1] → second row
rows[2] → third row
Step-by-Step
First, the code checks:

numRows == 1

or

numRows >= s.length()

If either condition is true, no zigzag conversion is needed, so the original string is returned.
An array of StringBuilder objects is created.
The size of the array is numRows.
Each row is initialized with an empty StringBuilder.

For 3 rows:
rows[0] = ""
rows[1] = ""
rows[2] = ""
row keeps track of the current row.

Initially:
row = 0

So we start from the top row.
down tells us the current direction.

Initially:
down = true

So the characters move downward.
Placing Characters
For every character in the string:
rows[row].append(c)
adds the character to the current row.

For example:
P → row 0
A → row 1
Y → row 2

The pattern starts:
P
A
Y
Changing Direction

When we reach the first row:
row == 0
the direction becomes downward.

When we reach the last row:
row == numRows - 1

the direction changes upward.
So with 3 rows, the movement is:

0
 ↓
1
 ↓
2
 ↑
1
 ↑
0
 ↓
1
 ↓
2

This creates the zigzag pattern.
Moving to the Next Row

The code uses:
row += down ? 1 : -1

This means:

If down is true:
row = row + 1

If down is false:
row = row - 1

So the row pointer moves:
0 → 1 → 2 → 1 → 0 → 1 → 2
Example

For:
PAYPALISHIRING

with:

numRows = 3

Characters are distributed like this:

P       A       H       N
 A     P L     S I     I G
  Y   I       R

The actual row contents become:

Row 0: P A H N
Row 1: A P L S I I G
Row 2: Y I R

Then the code combines the rows.
Creating the Final Result

A new StringBuilder called result is created.

Each row is appended one after another:

Row 0
+
Row 1
+
Row 2

For the example:

PAHN
+
APLSIIG
+
YIR

Final result:
PAHNAPLSIIGYIR

Why StringBuilder?
StringBuilder is used because we repeatedly append characters.
It is more efficient than repeatedly creating new String objects.
Key Idea to Remember
Create rows → Move downward → Reach bottom → Move upward → Reach top → Repeat → Combine all rows.

Complexity

Time Complexity: O(n)
Every character is processed once.
Space Complexity: O(n)
The characters are stored in the row StringBuilders and the final result.