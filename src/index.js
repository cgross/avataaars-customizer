import React from 'react'
import {Piece} from 'avataaars'
import Avatar from 'avataaars'
import map from 'lodash/map'
import styles from './styles.css'
import options from './options';

export default function AvataaarsCustomizer(props) {

  const [selectedTab,setSelectedTab] = React.useState('top');

  const [attributes,setAttributes] = React.useState(props.value || {
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

  function pieceClicked(attr,val) {
    var newAttributes = {
      ...attributes,
      [attr]:val
    };
    setAttributes(newAttributes);
    if (props.onChange) {
      props.onChange(newAttributes);
    }
  }

  return (
    <div>
      <div className={styles.avatar}>
        <Avatar
            style={{width: '300px', height: '300px'}}
            avatarStyle='Circle'
            {...attributes}
          /> 
      </div>
      <div className={styles.tabs}>
        {
          map(options,(option) => {
            return (
                <div 
                  className={styles.tab + ' ' + (selectedTab == option.type ? styles.selectedTab : '')}
                  onClick={() => setSelectedTab(option.type)}
                  >
                  {option.label}
                </div>
              );
          })          
        }
      </div>
      <div className={styles.tabpanes}>
        {
          map(options,(option) => {
            return (
                <div className={styles.tabpane + ' ' + (selectedTab == option.type ? styles.visible : '')}>
                  {
                      map(option.values,(val) => {
                      var attr = {};
                      attr[option.attribute] = val;
                      if (option.transform) {
                        attr.style = {transform:option.transform};
                      }
                      // if (option.colors) {
                      //   if (option.hatColors && option.hats.indexOf(val) !== -1) {
                      //     attr.hatColor = attributes.hatColor;
                      //   } else {
                      //     attr[option.colorAttribute] = attributes[option.colorAttribute];
                      //   }
                      // }
                      return <div className={styles.piece} onClick={() => pieceClicked(option.attribute,val)}>
                              <Piece pieceSize="50" pieceType={option.type} {...attr}/>
                              {
                                (val === 'Blank' || val === 'NoHair') &&
                                <div className={styles.none}>(none)</div>
                              }
                            </div>
                    })
                  }
                  {
                    option.colors && option.values.length > 0 && 
                      <div className={styles.divider}><div></div></div>
                  }
                  {
                    option.colors && (option.type !== 'top' || option.hats.indexOf(attributes.topType) === -1) && 
                      map(option.colors,(color,colorName) => {
                        return <div 
                                className={styles.color} 
                                style={{backgroundColor:color}}
                                onClick={() => pieceClicked(option.colorAttribute,colorName)}
                              ></div>
                      }) 
                  }
                  {
                    option.hatColors && option.hats.indexOf(attributes.topType) !== -1 && 
                      map(option.hatColors,(color,colorName) => {
                        return <div 
                                className={styles.color} 
                                style={{backgroundColor:color}}
                                onClick={() => pieceClicked('hatColor',colorName)}
                              ></div>
                      }) 
                  }                  
                </div>
              );
          })
        }
      </div>
    </div>
  );
}

