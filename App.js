
import React, { useState, useEffect }  from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import data from './data';
import Row from './components/row';
import Constants from 'expo-constants';
import Search from './components/search';
/*
const App = () => {
  const [filteredData, setFilteredData] = useState([]);

  const executeSearch = (searchPhrase) => {
    const filteredResults = data.filter((person) =>
      person.lastname.toLowerCase().startsWith(searchPhrase.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    
    setFilteredData(data);
  }, []);

  const renderItem = ({ item }) => <Row person={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default App;*/
const App = () => {
  const [filteredData, setFilteredData] = useState([]);

  const executeSearch = (searchPhrase) => {
    const filteredResults = data.filter((person) =>
      person.lastname.toLowerCase().startsWith(searchPhrase.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    // Set data to state variable when the component is mounted
    setFilteredData(data);
  }, []);

  const renderItem = ({ item }) => <Row person={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight + 20, // Adjusted paddingTop
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20,
  },
});

export default App;