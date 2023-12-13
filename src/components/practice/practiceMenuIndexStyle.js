import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  button: {
    marginTop: 27,
    backgroundColor: "yellow",
    padding: 10,
    margin: 3,
    borderRadius: 6,
    width: 300,
    height: 60,
    alignItems: "center",
  },
  buttonText: {
    marginBottom: 3,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "blue",
    fontSize: 30,
  },
  mainText: {
    margin: 45,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "yellow",
    fontSize: 36,
  },
  icon: {
    color: "yellow",
    alignItems: "center",
  },
  iconText: {
    textAlign: "center",
    color: "yellow",
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});

export default styles;
