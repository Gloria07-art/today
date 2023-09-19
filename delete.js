import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeleteItem = ({ onDelete }) => {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#F24C3D',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    borderRadius: 0,
    width: 90,
    height: 30,
    padding: 9,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'black',
  },
});

export default DeleteItem;
