import { Button } from 'react-native';

import { styles } from './StyleSheetCSS';


const ShopItem = ({model}) => {
    const image = require(`../assets/${model.itemName}/${model.itemName}.png`)
    
    function handleBuy(){
        console.log(`Buying ${model.itemName}`)
    }
    
    return(
        <div style={styles.shopItem}>
            <h1>{model.itemDisplayName}</h1>
            <img src={image} style={styles.shopItemImage} ></img>
            <p style={styles.shopItemDescription}>{model.itemDescription}</p>
            <Button title="Buy" onPress={handleBuy} />
        </div>

    )
}

export default ShopItem
