
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


import  {useState} from 'react'

const Display = ((props ) =>{


  const [item, setItem] = useState("")
  return (<View style={styles.container}>

  <Text style={styles.item}>{name}</Text>

  <View>
  
  {props.list.map((item)=>(
    <Text>{item.name} </Text>
  ))}

  
  </View>
  
  </View>)
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },

  // dbutton:{fontWeight: "bold", 
  //  backgroundColor: '#F24C3D',
  //   // width: 100,
  //   // height: 30,
  //   // padding: 9,
    
  //   color: 'white',
  //   alignItems: "center",
  //   justifyContent: "center"}
  
})

export default Display