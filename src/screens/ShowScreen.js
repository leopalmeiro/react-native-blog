import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  ); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: 
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35}/>
      </TouchableOpacity>        
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  content: {
    marginTop: 5,
    fontSize: 20
  }
});

export default ShowScreen;
