
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Search = ({ executeSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    executeSearch(searchText);
  };

  return (
    <TextInput
      placeholder="Search by last name..."
      onChangeText={(text) => setSearchText(text)}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
      style={styles.searchInput}
      placeholderTextColor="pink" 
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    color: 'pink', 
    borderBottomWidth: 1,
    borderBottomColor: 'pink', 
    marginBottom: 20,
  },
});

export default Search;
