import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "../LearnNumbers/Number.styles";
import globalStyles from "../../styles/global.styles";

const LearnNumberOne = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>Now you are Learning Number '1' !</Text>
      <View style={styles.dotContainer}>
        <View style={styles.row}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>1</Text>
          </View>
          <View style={styles.dot}>
            <Text style={styles.dotText}>2</Text>
          </View>
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.emptyDot}>
            <Text style={styles.emptyDotText}>4</Text>
          </View>
          <View style={styles.emptyDot}>
            <Text style={styles.emptyDotText}>5</Text>
          </View>
          <View style={styles.emptyDot}>
            <Text style={styles.emptyDotText}>6</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LearnNumberOne;
