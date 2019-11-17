# avataaars-customizer

Custom avatar generator based on https://avataaars.com/ and https://getavataaars.com/.

## Install

```bash
npm install --save avataaars-customizer
```

React, react-dom, avataaars, and lodash are peer dependencies.

## Usage

```jsx
import React from 'react'

import AvataaarsCustomerizer from 'avataaars-customizer'

function Example() {
  const [customizedAttributes,setCustomizedAttributes] = React.useState({
    topType:'LongHairMiaWallace',
    accessoriesType:'Prescription02',
    hairColor:'BrownDark',
    facialHairType:'Blank',
    clotheType:'Hoodie',
    clotheColor:'PastelBlue',
    eyeType:'Happy',
    eyebrowType:'Default',
    mouthType:'Smile',
    skinColor:'Light',
  });

  return (
    <AvataaarsCustomizer value={customizedAttributes} onChange={setCustomizedAttributes}/>
  )
}
```

## License

MIT © [cgross](https://github.com/cgross)
