import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Product = ({photoProduct, nameProduct, price, onPress}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photoProduct,
        }}
        style={styles.photoProduct}
      />
      <Text style={styles.nameProduct}>{nameProduct}</Text>
      <View style={styles.rowFooter}>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>+ Keranjang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 150,
    margin: 5,
  },
  photoProduct: {
    resizeMode: 'cover',
    width: 151,
    height: 151,
    borderRadius: 16,
  },
  nameProduct: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3E5481',
  },
  price: {
    fontSize: 12,
    color: '#9FA5C0',
    marginRight: 8,
  },
  button: {
    paddingVertical: 8,
    backgroundColor: '#1FCC79',
    borderRadius: 12,
    marginTop: 5,
  },
  textButton: {
    fontSize: 12,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});
