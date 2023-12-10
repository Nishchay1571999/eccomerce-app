import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PriceTable = ({price, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleText}>{price} $</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 15,
    color: 'black',
  },
});
export default PriceTable;
