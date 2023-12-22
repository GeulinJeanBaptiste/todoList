
import React from 'react';
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import Title from './components/Title/Title';
import Champ from './components/champ/Champ';
import Results from './components/Result/Result';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TodoListContext from './TodoListContext';
const MMKV = new MMKVLoader().initialize();
function App() {
  // const [savedList, setSavedList] = useMMKVStorage("list", MMKV);
  const handlePress = () => {
    if (saisie.length > 0) {
      setList([...list, saisie])
      // Vider saisie
      setsaisie("")
      // Vider la champ

    }
  };
  const [list, setList] = useMMKVStorage("list", MMKV, []);
  const [saisie, setsaisie] = React.useState("");
  const deleteItem = (index) => {
    let listTmp = list;
    listTmp.splice(index,1);
    setList(listTmp);
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <TodoListContext.Provider value={{ list, setList, saisie, setsaisie, deleteItem }}>
          <View>
            <Title></Title>
            <Champ></Champ>
            <Button color='red' title="Ajouter" style={styles.buttonStyle} onPress={handlePress} ></Button>
          </View>
          <Results></Results>
        </TodoListContext.Provider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

