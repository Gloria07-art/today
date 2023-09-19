import { useState } from 'react';

import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import AddItem from './components/Add';
import Display from './components/display';
import DeleteItem from './components/delete';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Meat' },
    { id: 2, name: 'Bread' },
    { id: 3, name: 'CrossBuns' },
    { id: 4, name: 'Juice' },
  ]);

  // // const addShoppingItem = ((text)=>{
  // //   setItems((prevItems)=>{
  // //     return[{id:3, shoopingItem:text}, ...prevItems]
  // //   })

  // })

  // const addItem = (itemName) => {
  //   setItems([...items, itemName]);
  // };

  const addItem = (itemName) => {
    const newItem = { id: items.length + 1, name: itemName };
    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Shopping list </Text>
      <AddItem addItem={addItem} />
      // <Display list={items} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.name}</Text>

            <DeleteItem onDelete={() => deleteItem(item.id)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    margin: 24,
  },

  item: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  
  

  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});
