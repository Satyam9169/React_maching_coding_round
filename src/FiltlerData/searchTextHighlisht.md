# Search Text Highlight in React (Beginner Friendly)

## Goal

When a user types in the input:

-   Filter the matching strings.
-   Highlight only the matching text.

Example:

Input:

`Jack`

Output:

`Parley handsomely kick` **🟨Jack🟨** `Tar`

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
filter() keeps matching strings
     │
     ▼
map() loops through results
     │
     ▼
indexOf() finds where search text starts
     │
     ▼
slice() splits string into 3 parts
     │
     ▼
Before + Highlight + After
```

------------------------------------------------------------------------

# Step 1 - State

``` js
const [text, setText] = useState("");
```

`text` stores whatever the user types.

Example:

``` text
User types: Jack

text = "Jack"
```

------------------------------------------------------------------------

# Step 2 - Input

``` jsx
<input value={text} onChange={handleChange} />
```

``` js
const handleChange = (e) => {
    setText(e.target.value);
}
```

Typing updates `text`, then React re-renders.

------------------------------------------------------------------------

# Step 3 - Filter

``` js
const filterText = persons.filter(person =>
    person.toLowerCase().includes(text.toLowerCase())
);
```

Example:

``` text
Search = jack

Parley matey Davy Jones Locker      ❌
Parley handsomely kick Jack Tar     ✅
Holystone careen Shiver me jack     ✅
```

Only matching rows remain.

------------------------------------------------------------------------

# Step 4 - map()

``` jsx
filterText.map((person,index)=>{})
```

React loops through every matching string.

------------------------------------------------------------------------

# Step 5 - indexOf()

``` js
const start =
person.toLowerCase().indexOf(text.toLowerCase());
```

Example

``` text
Parley handsomely kick Jack Tar
                        ↑
                     start = 24
```

------------------------------------------------------------------------

# Step 6 - React Splits the String

Instead of coloring the whole string, React cuts it into 3 pieces.

``` text
+------------------------+
| Before                 |
| Parley handsomely kick |
+------------------------+

+-----------+
| Highlight |
| Jack      |
+-----------+

+-----------+
| After     |
| Tar       |
+-----------+
```

------------------------------------------------------------------------

# Piece 1

``` jsx
person.slice(0,start)
```

Meaning:

Take everything from index **0** until **before** `start`.

Output

``` text
Parley handsomely kick
```

------------------------------------------------------------------------

# Piece 2

``` jsx
person.slice(start,start+text.length)
```

Suppose

``` text
start = 24
text = Jack
length = 4
```

React executes

``` js
person.slice(24,28)
```

Output

``` text
Jack
```

React wraps it:

``` jsx
<span style={{backgroundColor:"yellow"}}>
    Jack
</span>
```

Only this word becomes yellow.

------------------------------------------------------------------------

# Piece 3

``` jsx
person.slice(start+text.length)
```

Calculation

``` text
24 + 4 = 28
```

React executes

``` js
person.slice(28)
```

Output

``` text
 Tar
```

Remember:

``` text
slice(start)

Start here
    ↓
[Start -------------------- End]
```

------------------------------------------------------------------------

# Final Render

``` jsx
<p>
    {person.slice(0,start)}

    <span style={{backgroundColor:"yellow"}}>
        {person.slice(start,start+text.length)}
    </span>

    {person.slice(start+text.length)}
</p>
```

Browser sees

``` text
Parley handsomely kick 🟨Jack🟨 Tar
```

------------------------------------------------------------------------

# Understanding slice()

Example

``` js
const str = "satyam agrahari";
```

Character index

``` text
String : s a t y a m _ a g r a h a r i
Index  : 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
```

## Example 1

``` js
str.slice(7)
```

Starts from index 7 until the end.

Output

``` text
agrahari
```

------------------------------------------------------------------------

## Example 2

``` js
str.slice(6)
```

Starts from the space.

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

Output

``` text
agra
```

------------------------------------------------------------------------

# Easy Rules

## slice(start)

``` text
Start here
   ↓
[Start ---------------- End]
```

Returns everything till the end.

## slice(start,end)

``` text
Start        Stop Before
  ↓               ↓
[Start -------- End)
```

Returns characters from `start` up to **before** `end`.

------------------------------------------------------------------------

# Interview Explanation

> "When the user types, React stores the input in state. It filters the
> array using `includes()`. For every matching string, `indexOf()` finds
> where the searched word begins. Then `slice()` divides the string into
> three parts: before the match, the matched text, and after the match.
> The matched part is wrapped in a `<span>` with a yellow background
> while the other two parts remain normal. Finally, React renders the
> three parts together, giving the effect of highlighted search text
> without changing the original string."
