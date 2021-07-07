import { StyleSheet } from "react-native";

export const ProductStyles = StyleSheet.create({

 Product_Image: {
  marginLeft: 5,
  marginTop: 10,
  width: '26%',
  justifyContent: 'center',
  aspectRatio: 2 / 2,
  borderRadius: 6,
 
 },

 Product_Title: {

  alignSelf: 'center',
  flexDirection: 'row',
  flexWrap: "wrap",
  marginLeft: 110,
  marginTop: -100,
  fontSize: 15,
  color: 'white',
  fontWeight: "800"

 },

 Product_Rating: {

  marginLeft: '30%',
  marginTop: '3%',
  fontWeight: 'bold',
  color: 'lightgrey'

 },

 Product_Price: {

  marginLeft: '30%',
  marginTop: '1%',
  fontWeight: 'bold',
  color: 'green'

 },
})