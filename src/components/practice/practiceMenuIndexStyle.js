import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001A91",
  },
  button: {
    marginTop: height * 0.03,
    backgroundColor: "#FFEC00",
    padding: 7,
    margin: 10,
    borderRadius: 10,
    width: width * 0.5,
    height: height * 0.06,
    alignItems: "center",
  },
  buttonText: {
    marginTop:7,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "#001A91",
    fontSize: width * 0.05,
  },
  mainText: {
    margin: height * 0.08,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "#FFEC00",
    fontSize: width * 0.05,
  },
  icon: {
    color: "#FFEC00",
    alignItems: "center",
  },
  iconText: {
    textAlign: "center",
    color: "#FFEC00",
    fontSize: width * 0.06,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  HOMEText: {
    textAlign: "center",
    color: "#001A91",
    fontSize: width * 0.06,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  buttonHome:{
    backgroundColor: "#FFEC00",
    padding: 7,
    marginTop:20,
    marginBottom: 20,
    borderRadius: 5,
    width: width * 0.35,
    height: height * 0.05,
    alignItems: "center",

  },
});

export default styles;
