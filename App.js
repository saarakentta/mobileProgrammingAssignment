import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./styles/Styles";
import { BottomNavigation, MD3LightTheme, PaperProvider } from "react-native-paper";
import { useState } from "react";
import ExerciseContext from "./components/ExerciseContext";
import { UnitsProvider } from "./components/UnitsContext";
import ExerciseFormPage from "./components/ExerciseFormPage";
import ExerciseListPage from "./components/ExerciseListPage";
import SelectUnitsPage from "./components/SelectUnitsPage";

const myTheme = {
  ...MD3LightTheme, 
  colors: {
    ...MD3LightTheme.colors, 
    primary: '#55AD9B',
    secondaryContainer: '#95D2B3',
  }
}

const routes = [
  {key : 'addexercise', title : 'Add exercise', focusedIcon: 'plus-box'},
  {key : 'exerciselist', title : 'Exercises', focusedIcon: 'view-list'},
  {key : 'selectunits', title : 'Select units', focusedIcon: 'tools'}
]

export default function App() {
  const [exercise, setExercise] = useState([]);
  const [index, setIndex] = useState(0);

  const renderScene = BottomNavigation.SceneMap({
    addexercise: ExerciseFormPage,
    exerciselist: ExerciseListPage,
    selectunits: SelectUnitsPage
  });

  return (
    <UnitsProvider>
    <PaperProvider theme={myTheme}>
      <ExerciseContext.Provider value={{exercise, setExercise}}>
        <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{backgroundColor: '#F1F8E8'}}
        />
      </ExerciseContext.Provider>
    </PaperProvider>
    </UnitsProvider>
  );
}
