import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Preview = ({ navigation }) => {
  const renderBraille = () => {
    const brailleRepresentation = ["1", "0", "1", "0", "1", "0"]; // Braille for 0

    return (
      <View style={styles.dotContainer}>
        <View style={styles.row}>
          {brailleRepresentation.slice(0, 3).map((dot, index) => (
            <View
              key={index}
              style={dot === "1" ? styles.dot : styles.emptyDot}
            >
              <Text style={styles.dotText}>{index + 1}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {brailleRepresentation.slice(3, 6).map((dot, index) => (
            <View
              key={index + 3}
              style={dot === "1" ? styles.dot : styles.emptyDot}
            >
              <Text style={styles.dotText}>{index + 4}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

    return (
        <View style={styles.container}>
            <Text style={styles.Heading}>
            So wird die Frage für die Schüler aussehen:
                    </Text>
                <View style={styles.header}>
                    <View style={styles.line} />
                    </View>
                    <Text style={styles.text}>
                    Wählen Sie Punkte aus, die für die Zahl "0" stehen, und
        drücken Sie auf prüfen:{'\n'}
                    </Text>
                    {renderBraille()}
                    <View style={styles.buttonContainer}>
                        {/* Removed the home button */}
                        <TouchableOpacity style={styles.btnBack} onPress={() => { }}>
                            <Text style={styles.buttonText}>Zurück</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNext} onPress={() => { }}>
                            <Text style={styles.buttonText}>Nächste</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.line2} />
                    </View>
                <TouchableOpacity style={styles.btnBackToUse} onPress={() =>{  navigation.goBack()}}>
                            <Text style={styles.buttonText}>Zurück</Text>
                        </TouchableOpacity>
        </View>
    );
};



export default Preview;
const styles = {
    container: {
    flex: 1,
    backgroundColor: "#FFEC00",
    justifyContent: 'center',
    alignItems: "center",
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    marginTop: 18,
    height: 9,
    backgroundColor: '#001A91',
    flex: 1,
  },
  line2: {
    marginTop:35,
    height: 9,
    backgroundColor: '#001A91',
    flex: 1,
  },
  // Removed home button styles
  text: {
    color: "#001A91",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    fontFamily: "Arial",
    top: 30,
  },
  dotContainer: {
    flexDirection: "row",
    top: 20,
  },
  row: {
    flexDirection: "column",
    marginHorizontal: 2,
    padding: 5,
  },
  dot: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#001A91",
    margin: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyDot: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "white",
    margin: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  dotText: {
    color: "#FFEC00",
    fontSize: 27,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  btnBack: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    opacity: 0.5,
  },
  btnNext: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFEC00",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnBackToUse:{
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 1,
    borderRadius: 10,
    marginBottom:20,
    marginTop:20,
  },
  Heading:{
    fontSize: 27,
    color:'#001A91',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:18,
  },
};