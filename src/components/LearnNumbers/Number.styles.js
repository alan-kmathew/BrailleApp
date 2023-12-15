import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    top: 50,
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
  emptyDotText: {
    color: "#001A91",
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 120,
  },
  btnBack: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 40,
    borderRadius: 10,
    opacity: 0.5,
  },
  btnNext: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFEC00",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
