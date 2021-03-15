import React, {useContext} from 'react';
import {Navbar} from "./components/Navbar";
import {View, StyleSheet} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from './context/screen/screenContex';

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext)

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20
  }
});

