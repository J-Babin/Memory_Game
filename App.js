import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import components 
import Cards from './Components/Cards';

export default function App() {

  const map = () => {
    let map_def = [];
    let row = []

    
      for (let i = 0; i < 4; i++){
      for (let j = 0; j <= 4 ; j++){
        row [j] = { "value" : Math.random(0,9),}
        if(j == 4){
          map_def.push(row)
          row = []
        }
      }
    }
    return map_def 
  }
    

  const renderCards = (cards) => {
    let test = cards.map((card, index) => {
      console.log(card)
      return (
        <Cards key={index} />
      );
    });
    return test
  }


  // decoupage des ligne 


  let row  = map();
  let result;
  if(row){
 
    result = row.map((cards, index) => {
      console.log(cards)
      console.log("result ")
      return (
        <View key={index} style={styles.row} >
           {renderCards(cards)} 
        </View>
      )
    })
  }

   
  
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {result}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flex: 18,
    justifyContent: 'space-between',
    marginTop: 200,
    marginBottom: 100,
    marginLeft: 30,
    marginRight: 30,
  }

});
