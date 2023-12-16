import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEC00",
  },
  questionCountContainer: {
    backgroundColor: "#001A9180",
    padding: 8,
    borderRadius: 27,
    marginTop: 27,
    alignSelf: "center",
  },
  questionCountText: {
    color: "#001A91",
    fontSize: 16,
    fontWeight: "bold",
  },
  question: {
    color: "#001A91",
    textAlign: "center",
    fontSize: width * 0.04,
    fontStyle: "normal",
    fontWeight: "bold",
    fontFamily: "Arial",
    top: height * 0.03,
  },
  buttonNCContainer: {
    flexDirection: "row",
    marginBottom: 60,
    alignSelf: "center",
  },
  btnClear: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 40,
    borderRadius: 10,
    opacity: 0.7,
  },
  btnSubmit: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#001A91",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomButtonText: {
    color: "#FFEC00",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 0, // Adjusted margin to ensure buttons are visible
  },
  circleButton: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    margin: 35, // Adjusted margin to ensure buttons are visible
    justifyContent: "center",
    alignItems: "center",
  },
  circleButtonText: {
    color: "#001A91",
    fontSize: 36,
    fontWeight: "bold",
  },
  selectedButton: {
    backgroundColor: "#001A91",
  },
  selectedText: {
    color: "#FFEC00",
  },
  modalContainer: {
    backgroundColor: "#FFEC00",
    borderRadius: 30,
    borderColor: "#001A91",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#001A91",
  },
});

export default styles;
