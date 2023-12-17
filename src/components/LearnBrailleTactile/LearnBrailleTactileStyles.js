import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEC00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  letterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
  letterButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#001A91",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  letterText: {
    fontSize: 20,
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
    marginBottom: 90,
    marginTop: 80
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
  btnPreviousExercise: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 100,
  },
  btnNextExercise: {
    backgroundColor: "#001A91",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 100,
  },
  buttonText: {
    color: "#FFEC00",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;


