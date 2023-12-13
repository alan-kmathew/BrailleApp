import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./practiceNumbersStyles";
import { useNavigation } from "@react-navigation/native";

// Define the PracticeNumbers component
const PracticeNumbers = () => {
  const navigation = useNavigation();
  const totalQuestions = 5;
  const [currentNumber, setCurrentNumber] = useState(1);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [isErrorPopupVisible, setErrorPopupVisible] = useState(false);
  const [errorPopupTimer, setErrorPopupTimer] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  // Define the correct answers for each question
  const correctAnswers = [
    [1], // Correct answers for question 1
    [1, 2], // Correct answers for question 2
    [1, 3, 5], // Correct answers for question 3
    [2, 5, 6], // Correct answers for question 4
    [1, 4, 6], // Correct answers for question 5
  ];

  // useEffect hooks for logging selected buttons and resetting them
  useEffect(() => {
    console.log("Selected Buttons:", selectedButtons);
  }, [selectedButtons]);

  useEffect(() => {
    setSelectedButtons([]);
  }, [currentNumber]);
  // Handle button toggle, clear, and submission
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
    if (currentNumber > 1) {
      setCurrentNumber(currentNumber - 1);
    } else {
      // If user is at the first question, navigate back to the previous screen
      navigation.goBack();
    }
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
      // Exit the function early to prevent further actions for incorrect answers
    }

    toggleModal();

    if (currentNumber === totalQuestions) {
      // Last question, replace the "End" button with "Submit"
      clearErrorPopupTimer();
      setCurrentNumber(currentNumber + 1); // Move to a non-existent next question to replace the button
    }
  };

  const toggleErrorPopup = () => {
    setErrorPopupVisible(true);

    const timer = setTimeout(() => {
      setErrorPopupVisible(false);
    }, 2000); // Adjust the timeout duration as needed

    setErrorPopupTimer(timer);
  };

  const clearErrorPopupTimer = () => {
    clearTimeout(errorPopupTimer);
  };

  const handleBack = () => {
    if (currentNumber > 1) {
      clearErrorPopupTimer();
      setCurrentNumber(currentNumber - 1);
    }
  };

  const handleNext = () => {
    if (currentNumber < totalQuestions) {
      clearErrorPopupTimer();
      setCurrentNumber(currentNumber + 1);
    }
  };

  const toggleModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);

      if (currentNumber === totalQuestions) {
        // Navigate to the LastPage screen
        navigation.navigate("LastPage", { word: "ZAHLEN" });
      } else {
        // Navigate to the next question or screen
        setCurrentNumber(currentNumber + 1);
      }
    }, 2000);
  };
  const handleEnd = () => {
    console.log("End of questions");
    // Perform actions when the user reaches the end of the questions
    // You can navigate to a different screen, show results, etc.
  };

  // Render the component
  return (
    <View style={styles.container}>
      <View style={styles.questionCountContainer}>
        <Text style={styles.questionCountText}>
          Question {currentNumber} out of {totalQuestions}
        </Text>
      </View>

      <Text style={styles.question}>
        Please select the dots that represent number "{currentNumber}" and press
        submit.
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
              {isAnswerCorrect ? "Correct" : "Incorrect"}
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
            {selectedButtons.length > 0 ? "Clear" : "Back"}
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
            {currentNumber === totalQuestions ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PracticeNumbers;
