import { useContext } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import ExerciseContext from "./ExerciseContext";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import UnitsContext from "./UnitsContext";

export default function ExerciseListPage() {

  const {exercise} = useContext(ExerciseContext);
  const { unit } = useContext(UnitsContext);

  const totals = exercise.reduce((acc, item) => {

      const distance = Number(item.distance); 
      if (item.category === "Bike") {
        acc.bike += distance;
      } else if (item.category === "Swim") {
        acc.swim += distance;
      } else if (item.category === "Run") {
        acc.run += distance;
      }

      return acc;
    },
    { bike: 0, swim: 0, run: 0 }
  );

  return (
    <SafeAreaView style={Styles.container}>
       <Text variant="headlineLarge" style={Styles.header}>LIST OF EXERCISES</Text>
       <View style={Styles.icons}>
      <View style={Styles.iconWithText}>
      <FontAwesome6 name="person-swimming" size={30} color="black" />
        <Text style={Styles.distanceText}>{totals.swim.toFixed(1)} {unit === 'km' ? 'km' : 'miles'}</Text>
      </View>
      <View style={Styles.iconWithText}>
        <MaterialIcons name="directions-bike" size={30} color="black" />
        <Text style={Styles.distanceText}>{totals.bike.toFixed(1)} {unit === 'km' ? 'km' : 'miles'}</Text>
      </View>
      <View style={Styles.iconWithText}>
        <MaterialCommunityIcons name="run" size={30} color="black" />
        <Text style={Styles.distanceText}>{totals.run.toFixed(1)} {unit === 'km' ? 'km' : 'miles'}</Text>
      </View>
    </View>
       <FlatList
          data={exercise}
          renderItem={Item}
          keyExtrator={item => item.date}
       />
    </SafeAreaView>
  );
}

function Item({item}){
  return(
    <Card style={Styles.card}>
    <Card.Title titleVariant="titleSmall" title={item.category + ' ' + item.date} />
    <Card.Content>
      <Text>{'Distance: ' + item.distance + item.unit + ', ' + 'Duration: ' +  + item.duration + 'min '}</Text>
    </Card.Content>
  </Card>
  )

}