import { Button, Text } from 'react-native';

import { styles } from './StyleSheetCSS';
import { patchCreditsByUsername, patchInventoryByUsername } from '../api';
import { useEffect, useState } from 'react';


const ShopItem = ({model, currentUser}) => {

    // const image = require(`../assets/${model.itemName}/${model.itemName}.png`)

    const [error, setError] = useState('')
    const [isBuy, setIsBuy] = useState(false);

    const handleBuy = async () => {
      setIsBuy(true);
    };
    
    useEffect(() => {
      if(isBuy){
        if(currentUser.credits > model.itemCost){
          const patchData = async () => {
            try {
							await patchCreditsByUsername(
								currentUser.username,
								model.itemCost * -1
							);
							await patchInventoryByUsername(
								currentUser.username,
								model.itemName
							);
							setIsBuy(false);
						} catch (error) {
							setError('Unable to process request. Check your connection...');
							setTimeout(() => {
								setError('');
							}, 5000);
						}
          }
          patchData();
        } else {
          console.log('hi')
          setError(`Cannot purchase ${model.itemName}, not enough credits. Get recycling islander...` )
          setTimeout(() => {
            setError('');
          }, 5000);
        }    
      }
    }, [isBuy])

		return (
			<div style={styles.shopItem}>
				<h1>{model.itemDisplayName}</h1>
				{/* <img src={image} style={styles.shopItemImage}></img> */}
				<p style={styles.shopItemDescription}>{model.itemDescription}</p>
				<Button title='Buy' onPress={handleBuy} />
        {error? <Text>{error}</Text> : null}
			</div>
		);
}

export default ShopItem
