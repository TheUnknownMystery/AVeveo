import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container: {

  flex: 1,
  backgroundColor: '#E3F3DE',

 },

 ShoppingCardIcon: {

  alignSelf: 'center',
  marginTop: -130,
  marginRight: 240,
  transform: [{ rotate: '34deg' }],

 },

 IntroductionText: {

  alignSelf: 'center',
  marginLeft: 103,
  marginTop: -118,
  fontSize: 19,
  color: 'white',
  fontWeight: 'bold'

 },

 title: {

  flexDirection: 'row',
  flexWrap: "wrap",

 },
 GreenBackground: {

  width: "100%",
  height: "100%",
  borderTopRightRadius: 150,
  borderTopLeftRadius: 20,
  backgroundColor: '#6AC961',
  marginTop: 200,

 },
});