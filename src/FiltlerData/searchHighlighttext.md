# Search Highlight Text in React (Beginner Friendly)

## Core Idea

React **cuts the string into 3 pieces**:

``` text
+----------------------+-----------+---------+
| Before               | Match     | After   |
+----------------------+-----------+---------+
```

It then renders:

``` jsx
<>
  Before
  <span style={{ backgroundColor: "yellow" }}>
    Match
  </span>
  After
</>
```

This is why only the matching word is highlighted.

------------------------------------------------------------------------

# Example

``` js
const person = "Parley handsomely kick Jack Tar";
const text = "Jack";

const start = person.indexOf(text); // 24
```

------------------------------------------------------------------------

# Line 1

``` jsx
person.slice(0, start)
```

Character indexes:

``` text
P  a  r  l  e  y     h  a  n  d  s  o  m  e  l  y     k  i  c  k     J  a  c  k     T  a  r
0  1  2  3  4  5 ...                                      24 25 26 27
```

`start = 24`

``` js
person.slice(0,24)
```

Meaning:

-   Start from index **0**
-   Stop **before** index **24**

Output

``` text
Parley handsomely kick
```

------------------------------------------------------------------------

# Line 2

``` jsx
person.slice(start, start + text.length)
```

``` text
text = Jack
text.length = 4

J a c k
1 2 3 4
```

Calculation

``` text
start = 24

24 + 4 = 28
```

JavaScript executes

``` js
person.slice(24,28)
```

Output

``` text
Jack
```

React wraps it

``` jsx
<span style={{ backgroundColor: "yellow" }}>
   Jack
</span>
```

Only **Jack** becomes yellow.

------------------------------------------------------------------------

# Line 3

``` jsx
person.slice(start + text.length)
```

Calculation

``` text
24 + 4 = 28
```

JavaScript executes

``` js
person.slice(28)
```

Meaning

> Start at index 28 and continue till the end.

Output

``` text
 Tar
```

------------------------------------------------------------------------

# Visual Representation

Original

``` text
+--------------------------------------------+
| Parley handsomely kick Jack Tar            |
+--------------------------------------------+
```

React splits it

``` text
+----------------------+
| Before               |
| Parley handsomely    |
| kick                 |
+----------------------+

+-----------+
| Match     |
| Jack      |
+-----------+

+-----------+
| After     |
| Tar       |
+-----------+
```

React combines them

``` text
Before + Match + After
```

Browser displays

``` text
Parley handsomely kick 🟨Jack🟨 Tar
```

------------------------------------------------------------------------

# Why not

``` jsx
<p>{person}</p>
```

Because React cannot highlight only one word inside one plain string.

Instead it renders

``` jsx
<>
  Before
  <span>Match</span>
  After
</>
```

------------------------------------------------------------------------

# Another Example

``` js
person = "I love React Framework";
text = "React";
```

``` text
start = 7
```

``` js
slice(0,7)
```

Output

``` text
I love
```

``` js
slice(7,12)
```

Output

``` text
React
```

``` js
slice(12)
```

Output

``` text
 Framework
```

Final

``` text
I love 🟨React🟨 Framework
```

------------------------------------------------------------------------

# Understanding slice()

``` js
const str = "satyam agrahari";
```

Character indexes

``` text
String : s a t y a m _ a g r a h a r i
Index  : 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
```

Index 6 = space

Index 7 = a

## Example 1

``` js
str.slice(7)
```

Starts from index 7 till end.

Output

``` text
agrahari
```

------------------------------------------------------------------------

## Example 2

``` js
str.slice(6)
```

Starts from space.

Output

``` text
 agrahari
```

------------------------------------------------------------------------

## Example 3

``` js
str.slice(0,6)
```

Output

``` text
satyam
```

------------------------------------------------------------------------

## Example 4

``` js
str.slice(7,11)
```

``` text
Index : 7 8 9 10
Char  : a g r a
```

Output

``` text
agra
```

------------------------------------------------------------------------

# Easy Rule

## slice(start)

``` text
Start here
   ↓
[Start----------------End]
```

Returns everything till the end.

## slice(start,end)

``` text
Start          Stop before
 ↓                  ↓
[Start-----------End)
```

Returns characters from **start** up to **before end**.

------------------------------------------------------------------------

# Complete Flow

``` text
User types
     │
     ▼
handleChange()
     │
     ▼
setText()
     │
     ▼
React re-renders
     │
     ▼
filter()
     │
     ▼
map()
     │
     ▼
indexOf()
     │
     ▼
slice()
     │
     ▼
Before + Highlight + After
```

------------------------------------------------------------------------

# Interview Answer

> First, `indexOf()` finds where the searched text begins. Then
> `slice()` divides the string into three parts: **Before**, **Match**,
> and **After**. React wraps only the **Match** inside a `<span>` with a
> yellow background and renders all three parts together. This
> highlights the searched text without changing the original string.
