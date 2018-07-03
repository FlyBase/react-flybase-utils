# react-flybase-utils

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## React FlyBase Utils

This is a collection of miscellaneous utilies for working with FlyBase
data in React.

### Getting started

```
yarn add https://github.com/FlyBase/react-flybase-utils.git
or
npm install https://github.com/FlyBase/react-flybase-utils.git
```

### Components

#### SupSubFormatter -

#####Description
Accepts a string via either the `text` parameter or a single `children`
element which contains FlyBase notations for super and subscripts and returns a React
element.  The React element will have all FlyBase tags converted to their HTML equivalent.

#####Parameters:
  - text - A string containing FlyBase symbol notations.
  - children - Same as text.
  
#####Returns:
  - A react element with tags converted to their html equivalents.

#####Tags currently converted: `<up />`, `<down />`

#####Examples:

```
import React from 'react';
import { SupSubFormatter } from 'react-flybase-utils';
export default () => <SupSubFormatter text={'mysymbol<up>1234</up>'} />;
```
or
```
import React from 'react';
import { SupSubFormatter } from 'react-flybase-utils';
export default () => <SupSubFormatter>{'mysymbol<up>1234</up>'}</SupSubFormatter>;
```

#### CurationStampParser -

#####Description
Accepts a string via either the `text` parameter or a single `children`
element which contains FlyBase notations for embedded symbols in text statements.
This component also passes the `@` delimited text through `<SupSubFormatter />` component.

#####Parameters:
  - text - A string containing FlyBase symbol notations.
  - children - Same as text.
  - baseURI - The base URI to use for the link.  Default: ''
  
#####Returns:
  - A react fragment with stamped text entities converted into links to
    FlyBase searches or links directly to reports.

#####Examples:

```
import React from 'react';
import { CurationStampParser } from 'react-flybase-utils';
const myText = 'blah @mygene@ blah blah';
export default () => <CurationStampParser>{myText}</CurationStampParser>;
```
or
```
import React from 'react';
import { CurationStampParser } from 'react-flybase-utils';
const myText = 'blah @mygene@ blah blah';
export default () => <CurationStampParser text={myText} />;
```
                    
#### ReportLink -

#####Description
A simple component for forming links to FlyBase reports.

#####Parameters:
  - fbid - The FlyBase ID to establish a link to.
  - text - A string to be used for link text.  Curation `<up/>` and `<down/>` tags are supported.
  - children - Same as text.
  - baseURI - The base URI to use for the link.  Default: ''
  
#####Returns:
  - A react link element pointing directly to the report.

#####Examples:

```
import React from 'react';
import { ReportLink } from 'react-flybase-utils';
export default () => <ReportLink fbid={'FBgn12345'} text={'mygene'} />;
```
or
```
import React from 'react';
import { ReportLink } from 'react-flybase-utils';
export default () => <ReportLink fbid={'FBgn12345'}>{'mygene'}</ReportLink>;
```
   
### Utility functions and constants

#### Symbols

##### SgmlToAscii -

##### Description
Takes a string and converts all curation notations of `<up />` and `<down />` to their ASCII equivalents.

##### Parameters:
  - text - The text to parse.

##### Returns: 
  - An string representing the ASCII version of the symbol.
  
##### Examples:

```
import { Symbols } from 'react-flybase-utils';

const asciiSymbol = Symbols.SgmlToAscii('mygene<up>12345</up>');
console.log(asciiSymbol); // Logs mygene[12345]

```


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
