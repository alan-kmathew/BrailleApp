import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEC00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#001A91",
  },
  letterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
    marginTop: 40,
  },
  letterButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginHorizontal: 5,
    opacity: 1,
  },
  letterText: {
    fontSize: 20,
    color: "#D5C540",
  },
  selectedLetter: {
    borderColor: "#001A91",
    borderWidth: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  btnCheck: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  btnBack: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginRight: 60,
  },
  btnNext: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFEC00",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#rgba(9, 9, 9, 0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 24,
    color: "#FFEC00",
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});

export default styles;
