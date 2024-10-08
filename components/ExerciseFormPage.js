import { Pressable, SafeAreaView, View, Modal, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Styles from "../styles/Styles";
import { SegmentedButtons } from "react-native-paper";
import { useContext, useState } from "react";
import ExerciseContext from "./ExerciseContext";
import {Calendar} from 'react-native-calendars';
import UnitsContext from "./UnitsContext";

export default function ExerciseFormPage() {
  const [category, setCategory] = useState();
  const [distance, setDistance] = useState();
  const [duration, setDuration] = useState();
  const [visible, setVisible] = useState(false); 
  const [date, setDate] = useState(); 
  const {exercise, setExercise } = useContext(ExerciseContext);
  const { unit } = useContext(UnitsContext);

  function addExercise() {

    const distanceValue = parseFloat(distance);
    const durationValue = parseFloat(duration);

    if (isNaN(distanceValue) || isNaN(durationValue)) {
      Alert.alert("Invalid input", "Distance and duration must be numeric.");
      return;
    }
    if (distanceValue < 0 || durationValue < 0) {
      Alert.alert("Invalid input", "Distance and duration cannot be negative.");
      return;
    }
    if (!date) {
      Alert.alert("Invalid input", "Please select a date.");
      return;
    }

    const [year, month, day] = date.dateString.split("-");
    const formattedDate = `${day}.${month}.${year}`;

    const modified = [...exercise, { category, distance, unit, duration, date: formattedDate }];
    setExercise(modified);
  }

  function dateSelected(day) {
    setVisible(false);
    setDate(day);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text variant="headlineLarge" style={Styles.header}>
        TRIATHLON EXERCISE DIARY
      </Text>

      <ExerciseSelection value={category} setValue={setCategory} />

      <TextInput
        label={`Distance (${unit === 'km' ? 'km' : 'miles'})`}
        style={Styles.textInput}
        mode="outlined"
        value={distance}
        onChangeText={setDistance}
        returnKeyType="done"
      />
      <TextInput
        label={"Duration (min)"}
        style={Styles.textInput}
        mode="outlined"
        value={duration}
        onChangeText={setDuration}
        returnKeyType="done"
      />
      <View style={Styles.calendar}>
        <Pressable onPress={() => setVisible(true)}>
          <Text>
            {date ? date.dateString : "Select date"}
          </Text>
        </Pressable>
      </View>

      <Modal visible={visible} transparent={false} >
        <View style={Styles.modalOverlay}>
          <View style={Styles.calendarContainer}>
            <Calendar onDayPress={dateSelected} />
          </View>
        </View>
      </Modal>

      <Button style={Styles.button} mode="contained" onPress={addExercise}>
        Add exercise!
      </Button>
    </SafeAreaView>
  );
}

function ExerciseSelection({ value, setValue }) {
  return (
    <View style={Styles.categories}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "Swim",
            label: "Swim",
            icon: "swim",
          },
          {
            value: "Bike",
            label: "Bike",
            icon: "bike",
          },
          { value: "Run", 
            label: "Run", 
            icon: "run" },
        ]}
      />
    </View>
  );
}
