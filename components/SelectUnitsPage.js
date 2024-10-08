import { useContext } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { Text, RadioButton } from "react-native-paper";
import UnitsContext from "./UnitsContext";

function convertKmToMiles(km) {
  return km * 0.621371;
}

function convertMilesToKm(miles) {
  return miles * 1.60934;
}

export default function SelectUnitsPage() {
  const { unit, setUnit } = useContext(UnitsContext);
  const { exercise, setExercise } = useContext(ExerciseContext);

  function handleUnitChange(newUnit) {
    if (unit !== newUnit) {
      const convertedExercises = exercise.map((item) => {
        const convertedDistance =
          newUnit === "km"
            ? convertMilesToKm(item.distance)
            : convertKmToMiles(item.distance);

        return {
          ...item,
          distance: convertedDistance.toFixed(2),
          unit: newUnit,
        };
      });

      setExercise(convertedExercises);
      setUnit(newUnit);
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text variant="headlineLarge" style={Styles.header}>
        SELECT UNITS
      </Text>
      <View style={Styles.RadioButtonGroup}>
      <RadioButton.Group onValueChange={handleUnitChange} value={unit}>
        <View style={Styles.RadioButton}>
          <RadioButton value="km" />
          <Text>Kilometers</Text>
        </View>
        <View  style={Styles.RadioButton}>
          <RadioButton value="miles" style= {Styles.RadioButton}/>
          <Text>Miles</Text>
        </View>
      </RadioButton.Group>
      </View>
      <View style= {Styles.imageContainer}>
      <Image source={require('../assets/sports.jpg')} style={Styles.image}/>
      </View>
    </SafeAreaView>
  );
}
