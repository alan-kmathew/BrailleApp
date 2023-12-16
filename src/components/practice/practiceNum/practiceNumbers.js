import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./practiceNumbersStyles";
import { useNavigation } from "@react-navigation/native";

const PracticeNumbers = () => {
  const navigation = useNavigation();
  const totalQuestions = 5;
  const [currentNumber, setCurrentNumber] = useState(1);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [isErrorPopupVisible, setErrorPopupVisible] = useState(false);
  const [errorPopupTimer, setErrorPopupTimer] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  const correctAnswers = [[1], [1, 2], [1, 3, 5], [2, 5, 6], [1, 4, 6]];

  useEffect(() => {
    console.log(
      "Selected Buttons for number " + currentNumber + ":",
      selectedButtons
    );
  }, [selectedButtons]);

  useEffect(() => {
    setSelectedButtons([]);
  }, [currentNumber]);

  const handleButtonToggle = (buttonNumber) => {
    setSelectedButtons((prevSelectedButtons) => {
      const isSelected = prevSelectedButtons.includes(buttonNumber);

      if (isSelected) {
        return prevSelectedButtons.filter((btn) => btn !== buttonNumber);
      } else {
        return [...prevSelectedButtons, buttonNumber];
      }
    });
  };

  const handleClear = () => {
    setSelectedButtons([]);
  };

  const handleSubmit = () => {
    if (selectedButtons.length === 0) {
      toggleErrorPopup();
      return;
    }

    const isCorrect = correctAnswers[currentNumber - 1].every((value) =>
      selectedButtons.includes(value)
    );

    setAnswerCorrect(isCorrect);

    if (isCorrect) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }

    toggleModal();

    if (currentNumber === totalQuestions) {
      clearErrorPopupTimer();
      navigation.goBack(); // Go back to the previous screen
    } else {
      setCurrentNumber(currentNumber + 1);
    }
  };

  const toggleErrorPopup = () => {
    setErrorPopupVisible(true);

    const timer = setTimeout(() => {
      setErrorPopupVisible(false);
    }, 2000);

    setErrorPopupTimer(timer);
  };

  const clearErrorPopupTimer = () => {
    clearTimeout(errorPopupTimer);
  };

  const toggleModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);

      if (currentNumber === totalQuestions) {
        navigation.navigate("LastPage", { word: "ZAHLEN" });
      }
    }, 2000);
  };

  const handleEnd = () => {
    console.log("End of questions");
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionCountContainer}>
        <Text style={styles.questionCountText}>
          Question {currentNumber} out of {totalQuestions}
        </Text>
      </View>

      <Text style={styles.question}>
        Wählen Sie Punkte aus, die für die Zahl "{currentNumber}" stehen, und
        drücken Sie auf prüfen.
      </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {[1, 4].map((buttonNumber) => (
            <TouchableOpacity
              key={buttonNumber}
              style={[
                styles.circleButton,
                selectedButtons.includes(buttonNumber) && styles.selectedButton,
              ]}
              onPress={() => handleButtonToggle(buttonNumber)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.includes(buttonNumber) && styles.selectedText,
                ]}
              >
                {buttonNumber}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[2, 5].map((buttonNumber) => (
            <TouchableOpacity
              key={buttonNumber}
              style={[
                styles.circleButton,
                selectedButtons.includes(buttonNumber) && styles.selectedButton,
              ]}
              onPress={() => handleButtonToggle(buttonNumber)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.includes(buttonNumber) && styles.selectedText,
                ]}
              >
                {buttonNumber}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[3, 6].map((buttonNumber) => (
            <TouchableOpacity
              key={buttonNumber}
              style={[
                styles.circleButton,
                selectedButtons.includes(buttonNumber) && styles.selectedButton,
              ]}
              onPress={() => handleButtonToggle(buttonNumber)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButtons.includes(buttonNumber) && styles.selectedText,
                ]}
              >
                {buttonNumber}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              {isAnswerCorrect ? "Richtig" : "Falsch"}
            </Text>
          </View>
        </Modal>
        <Modal isVisible={isErrorPopupVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Please select the dots, then press submit
            </Text>
          </View>
        </Modal>
      </View>

      <View style={styles.buttonNCContainer}>
        <TouchableOpacity
          style={styles.btnClear}
          onPress={() => {
            clearErrorPopupTimer();
            handleClear();
          }}
        >
          <Text style={styles.bottomButtonText}>
            {selectedButtons.length > 0 ? "Klar" : "Zurück"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            clearErrorPopupTimer();
            handleSubmit();
          }}
        >
          <Text style={styles.bottomButtonText}>
            {currentNumber === totalQuestions ? "FERTIG" : "Prüfen"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PracticeNumbers;
