import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const Notifications = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.emptyText}>
          Oops ! You dont have any notification yet{' '}
        </Text>
      </View>
    </Layout>
  );
};

export default Notifications;

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  emptyText: {
    color: 'grey',
  },
};
