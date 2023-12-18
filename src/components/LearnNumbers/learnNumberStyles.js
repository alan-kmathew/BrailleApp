import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEC00",
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 2,
    backgroundColor: '#001A91',
    flex: 1,
  },
  homebtn: {
    marginBottom:10,
    backgroundColor: '#001A91',
    borderRadius: 10,
    marginHorizontal: 10,
    marginRight: width > 600 ? 800 : 10,
    width: 100,
    height: 40,
  },
  homebtntext: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5
  },
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
    top: 70,
  },
  row: {
    flexDirection: "column",
    marginHorizontal: 2,
    padding: 5,
  },
  dot: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "#001A91",
    margin: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyDot: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "white",
    margin: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dotText: {
    color: "#FFEC00",
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 90,
  },
  btnBack: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    opacity: 0.5,
  },
  btnNext: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFEC00",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;