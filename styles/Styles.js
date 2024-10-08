import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { RadioButton, TextInput } from "react-native-paper";

export default Styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
        color: '#397368',
        fontWeight: "bold"
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      padding: 10,
      marginTop: Constants.statusBarHeight + 20,
      marginLeft: 10,
      marginRight: 10
    },
    categories: {
    marginTop: 20
    },
    textInput: {
        marginTop: 20,
    },
    button: {
        marginTop: 30
    },
    card: {
        marginBottom: 4,
        backgroundColor: '#F1F8E8',
        borderColor: '#95D2B3',
        borderWidth: 1
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
      },
      iconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
      },
      distanceText: {
        marginLeft: 5,
        fontSize: 16,
      },
      calendar: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        marginTop: 25,
        borderWidth: 1,
        borderColor:'#7c757e',
        borderRadius: 4,
      },
      RadioButton: {
        borderWidth: 1,
        borderColor:'#55AD9B',
        borderRadius: 10,
        backgroundColor: '#D8EFD3',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
      },
      RadioButtonGroup: {
        marginTop: 40,
        marginBottom: 50
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8EFD3',
      },
      calendarContainer: {
        backgroundColor: '#fff',
        padding: 20,  // Tilaa kalenterin ympärillä
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#55AD9B'
      },
      imageContainer: {
        flex: 1,
        alignItems: 'center',
      },
      image: {
        width: 380,
        height: 300,
        resizeMode: 'contain'
      }
  });
  