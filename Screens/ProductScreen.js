import * as React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { ProductScreenStyles } from '../Styles/ProductScreenStyles'

export default class ProductScreen extends React.Component {

 constructor(props) {
  super(props)

  this.state = {

   ProductDetails: this.props.navigation.getParam("Details")

  }
 }

 render() {
  return (

   <View>

    <Image

     style={styles.Product_Image}

     source={{

      uri: this.state.ProductDetails.item.image

     }}
    />

    <View style={{ elevation: 3, borderWidth: 0.4, borderColor: 'grey', backgroundColor: 'white', height: '40%' }}>

     <Text style={{

      marginTop: 13,
      marginLeft: 4,
      flexWrap: 'wrap',
      color: '#828487',
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 15

     }}>{this.state.ProductDetails.item.name}</Text>

     <Text style={{

      marginTop: 13,
      marginLeft: 4,
      flexWrap: 'wrap',
      color: '#828487',
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 15
     }}>

      {"Price: " + this.state.ProductDetails.item.price_string}

     </Text>

     <Pressable style={ProductScreenStyles.ViewButtonDetials} onPress={() => {



     }}>

      <Text style={ProductScreenStyles.ViewProductButtonText}>Add to Cart</Text>

     </Pressable>

     <Pressable style={ProductScreenStyles.BuyButtonDetials} onPress={() => {



     }}>

      <Text style={ProductScreenStyles.ViewProductButtonText}>{"Buy"}</Text>

     </Pressable>


    </View>
   </View>
  )
 }
}

const styles = StyleSheet.create({
 Product_Image: {

  width: '100%',
  height: 300

 },
})