import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderinfo}>
        <Text style={styles.orderIDText}>Order ID : {order._id}</Text>
        <Text style={styles.orderDateText}>Date : {order.date}</Text>
      </View>
      <Text style={styles.productInfoText}>
        Product name : {order.productInfo.name}
      </Text>
      <Text style={styles.productInfoText}>
        Price : {order.productInfo.price}
      </Text>
      <Text style={styles.productInfoText}>
        Quantity : {order.productInfo.qty}
      </Text>
      <Text style={styles.productInfoText}>
        Total AMount : {order.totalAmount} $
      </Text>
      <Text style={styles.status}>Order Status : {order.status}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  orderinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 5,
  },
  orderIDText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  orderDateText: {
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
  },
  productInfoText: {
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
  },

  status: {
    borderTopWidth: 1,
    fontWeight: 'bold',
    borderColor: 'lightgray',
    padding: 5,
    marginTop: 10,
    color: 'green',
  },
});
export default OrderItem;
