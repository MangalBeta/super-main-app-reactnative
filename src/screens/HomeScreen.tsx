import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome Home Screen</Text>
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to Detail Screen"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to Sales Mini App"
        onPress={() => {
          navigation.navigate('MiniApp');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;
