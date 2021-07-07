import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { styles } from '../Styles/Styles';
import { MaterialIcons } from "@expo/vector-icons";
import { ProductStyles } from "../Styles/ProductStyles"
import { AmazonData } from '../data/products';

import BottomSheet from "@gorhom/bottom-sheet"

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      Name: "Sauhardo",
      Product_Data: ''

    }
  }

  GetProductData = async () => {

    const API = "API_key"

    fetch(API)
      .then((response) => response.json())
      .then((response_json) => {

        this.setState({

          Product_Data: response_json.results

        })
      })
      .catch((error) => {

        alert(error)

      })
  }

  componentDidMount() {

    this.GetProductData()

  }
  render() {

    {
      //snapoint for the bottom sheet....
    }

    const snapPoints = [30, '30%', "22%"]

    return (
      <View style={styles.container} >
        {

          //Outer View-light green background

        }

        <StatusBar hidden />
        <View style={styles.GreenBackground}>
          {
            //dark green container
            //containing ListItems and other Components
          }

          <View>

            {
              // Shopping Cart Icon
              // Material Icons @expo/vectorIcons

            }
            <MaterialIcons

              size={120}
              name='shopping-cart'
              color={"#70C063"}
              style={styles.ShoppingCardIcon}

            />

            <View>

              <Text style={styles.IntroductionText}>

                {"HEY! " + this.state.Name + " " + 'Welcome Back'}

              </Text>
            </View>

            <View style={{ marginTop: 14 }}>
              {

                //Displaying All the Items from the Api 

              }

              <FlatList

                data={this.state.Product_Data}
                keyExtractor={(i, x) => x.toString() + i.toString()}
                renderItem={(items) => {

                  return (

                    <View>

                      <TouchableOpacity onPress={() => {

                        this.props.navigation.navigate("ProductScreen", { "Details": items })

                      }}>

                        <Image

                          style={ProductStyles.Product_Image}

                          source={{ uri: items.item.image }}
 
                        /> 

                        <Text style={ProductStyles.Product_Title}>{items.item.name}</Text>
                        <Text style={ProductStyles.Product_Rating}>{"Rating: " + items.item.stars}</Text>
                        <Text style={ProductStyles.Product_Price}>{"Price: " + items.item.price_string + "$"}</Text>
 
                      </TouchableOpacity>

                    </View>

                  )
                }}
              />

            </View>

          </View>
        </View>

        <BottomSheet

          index={2}
          snapPoints={snapPoints}


        >

          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

            <Text style={{

              fontSize: 20,
              fontWeight: "bold"

            }}>Your Cart</Text>

          </View>

        </BottomSheet>
      </View>
    );
  }
}
