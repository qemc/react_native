import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <React.Fragment>
        <View>
          <View style={styles.v1}>
            <Text>Grzegorz Fabiś 4c poprawa kart nr1</Text>
          </View>
          <View style={styles.v2}></View>
          <View style={styles.v3}>
          <View style={styles.v3each}></View>
          <View style={styles.v3each}></View>
          <View style={styles.v3each}></View>
          </View>
          <View style={styles.v33}></View>
          <View style={styles.v4}> 
          <View style={styles.v4each}></View>
          <View style={styles.v4each}></View>
          <View style={styles.v4each}></View>
          </View>
          <View style={styles.v33}></View>
          <View style={styles.v4}> 
          <View style={styles.v4each}></View>
          <View style={styles.v4each}></View>
          <View style={styles.v4each}></View>
          </View>

        </View>
        
  

      </React.Fragment>
  );
}

const styles = StyleSheet.create({
  v1:{
   
    backgroundColor:'green',
    height:120,
    margin:4,
    marginTop:30,
  },
  v2:{
    height:50,
    backgroundColor:'lightblue',
    margin:4,
    flexDirection:'row',
  },
  v3:{
    backgroundColor:'red',
    flex:1,
    height:100,
    flexDirection:'row',
    
  },
  v3each:{
    flex:1,
    height:30,
    backgroundColor:'black',
    marginBottom:10,
    margin:3,
    
  },
  v4:{
    
    flexDirection:'row',
    height:100,
    marginBottom:30,

  },
  v4each:{
    height:150,
    backgroundColor:'red',
    flex:1,
    margin:4,
  },
  v33:{
    height:40,
    backgroundColor:'pink',
    width:80,
    marginTop:40,
    marginLeft:40,
   
  }



});
