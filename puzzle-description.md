We should visit nodes of a graph, while paying attention to the fact that
some nodes preceede others - the prior are dependencies of the dependant nodes.

This example program doesn't allow multiple dependencies (could be added with minimal effort),
just fulfills this specification:

Input Output
```
x => x
```

Input Output
```
x =>
y =>
z =>
```

order doesn't matter

Input Output
```
x =>
y => z
z =>
```
'z' should preceede 'y'

Input Output
```
u =>
v => w
w => z
x => u
y => v
z =>
```
'w' should preceede 'v', 'z' should preceede 'w', and so on...