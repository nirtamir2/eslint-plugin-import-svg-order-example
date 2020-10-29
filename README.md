# ESLint plugin import problem

This repository has been created to reproduce [issue Import/order with .svg file patterns](https://github.com/benmosher/eslint-plugin-import/issues/1858) with eslint-plugin-import.

I want that in `src/Root.tsx` the svg files will be group and will import last.

## Setup

Run `yarn` to install dependencies and after that `yarn lint` to lint the files.

## Reproducing
- Navigate to `src/Root.tsx` and change the import order like in the expected block.
- Run `yarn lint`. If this issue will resolve - you should not get an error.

**NOTE:** you can configure it wherever you want, I just want to order my import in a way that `.svg` file imports will be after everything else (beside `css` files). 

### Expected:
```tsx
  import React, { useState } from "react";
 
  import aImg from "../assets/a.jpg";
  import zImg from "../assets/z.jpg";
 
  import svgImage from "../assets/undraw_Taken_re_yn20.svg";
 
  import "./Root.css";
 
 ```

### Actual:
```tsx
import React, { useState } from "react";

import aImg from "../assets/a.jpg";
import svgImage from "../assets/undraw_Taken_re_yn20.svg";
import zImg from "../assets/z.jpg";
import "./Root.css";
```
