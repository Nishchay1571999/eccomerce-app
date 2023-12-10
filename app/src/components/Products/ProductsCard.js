import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProductsCard = ({p}) => {
  const navigation = useNavigation();

  //more detaisl btn
  const handleMoreButton = id => {
    navigation.navigate('productDetails', {_id: id});
    console.log(id);
  };

  //ADD TO CART
  const handleAddToCart = () => {
    alert('added to cart');
  };
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri: p?.imageUrl}} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {p?.description.substring(0, 30)} ...more
        </Text>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreButton(p._id)}>
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 8,
    height: '60%',
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 5,
    color: 'black',
  },
  cardDesc: {
    fontSize: 10,
    textAlign: 'left',
    color: 'grey',
  },
  BtnContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#000000',
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnCart: {
    backgroundColor: 'orange',
    width: 50,
    marginLeft: 10,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProductsCard;
