import React, { Component } from 'react'

import AvataaarsCustomizer from 'avataaars-customizer'

export default function App() {
  var [customAttributes,setCustomAttributes] = React.useState({
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
    <div style={{margin:'auto',border:'1px solid #ccc',width:400}}>
      <AvataaarsCustomizer value={customAttributes} onChange={setCustomAttributes}/>
    </div>
  )
}
