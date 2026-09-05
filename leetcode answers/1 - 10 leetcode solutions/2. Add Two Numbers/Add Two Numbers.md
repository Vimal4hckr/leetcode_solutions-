Approach

The solution uses:

dummy → starting node for the result
current → keeps track of where to add the next digit
carry → stores the value carried to the next position
Step-by-Step
First, a dummy node is created to make building the result list easier.
current starts at the dummy node.
carry is initialized to 0 because there is no carry before the first addition.
The loop continues while:
l1 still has nodes, or
l2 still has nodes, or
there is still a carry.
A variable called sum is initialized with the current carry.
If l1 is not empty:
Its digit is added to sum.
l1 moves to the next node.
If l2 is not empty:
Its digit is added to sum.
l2 moves to the next node.

The new carry is calculated using the division by 10.

For example:
17 / 10 = 1
So the carry becomes 1.
The digit that belongs in the current result node is obtained using the remainder after division by 10.

For example:
17 % 10 = 7
So 7 is added to the result.

current then moves to the newly created node so the next digit can be added.
The loop continues until both lists are finished and there is no remaining carry.
Finally, dummy.next is returned because the dummy node itself is not part of the answer.
Example

Suppose:
l1 = 2 → 4 → 3
l2 = 5 → 6 → 4

These represent:
342 + 465 = 807

The calculation happens from left to right through the linked lists because the digits are stored in reverse order.
2 + 5 = 7
4 + 6 = 10
3 + 4 + 1 = 8

The result becomes:
7 → 0 → 8

Which represents:
807
Important Concept
The key idea is handling the carry, just like normal addition.
Digit = sum % 10
Carry = sum / 10

For example:
8 + 7 = 15

Digit = 15 % 10 = 5
Carry = 15 / 10 = 1
The 1 is then added to the next position.

Why Dummy Node?
The dummy node provides a fixed starting point for the result.
dummy → 7 → 0 → 8
At the end, we return:
dummy.next
So the actual answer is:
7 → 0 → 8

Complexity
Time Complexity: O(max(n,m))
The solution processes each node once.
Space Complexity: O(max(n,m))
The result linked list requires space for the output digits.
Key Idea to Remember
Add digits → Include carry → Store last digit → Move pointers → Repeat → Handle final carry.