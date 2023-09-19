import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

function AddItem  ({addItem})  {
  const [itemName, setItemName] = useState('');

  const handleAddItem =() => {
    if(itemName.trim() !== ''){
      addItem(itemName);
      setItemName('');
    }
    };

  // const addToShoppingList = () => {
  //   props.add();
  // };

  // const onChange = (textValue) => {
  //   setText(textValue);
  // };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter add"
      value={itemName} onChangeText={setItemName} />

      <TouchableOpacity style={styles.btn} onPress={handleAddItem}>
        <Text>Add </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
   fontWeight: "bold", 
   backgroundColor: '#A8DF8E',
    width: 100,
    height: 30,
    padding: 9,
    color: 'white',
    alignItems: "center",
    justifyContent: "center"
  },

  container:{
    padding:20,
    borderBottomWidth:1,
   borderColor:'#ccc' },

   input:{
    //  borderBottomWidth:1,
  borderColor:'#0000',
     marginBottom:10,
     padding:5,
     backgroundColor:'white',
   }
  
});

export default AddItem;
