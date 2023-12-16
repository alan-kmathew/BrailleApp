import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./practiceAlphabetsStyles"; // Make sure to use the correct style file
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const PracticeAlphabets = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const totalQuestions = 5; // Set the total number of questions
  const [currentAlphabet, setCurrentAlphabet] = useState("A");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);
  const [isErrorPopupVisible, setErrorPopupVisible] = useState(false);

  // Predefined array of correct answers for the practice session
  const correctAnswers = {
    A: [1],
    B: [1, 2],
    C: [1, 2, 3],
    D: [2, 5, 6],
    E: [1, 4, 6],
  };

  useEffect(() => {
    console.log("Selected Buttons:", selectedButtons);
  }, [selectedButtons]);

  useEffect(() => {
    setSelectedButtons([]);
  }, [currentAlphabet]);

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

  const toggleErrorPopup = () => {
    setErrorPopupVisible(true);
    setTimeout(() => {
      setErrorPopupVisible(false);
    }, 2000);
  };

  const toggleModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
      if (currentQuestionIndex === totalQuestions - 1) {
        // Navigate to the LastPage screen
        navigation.navigate("LastPage", { word: "ALPHABETE" });
      }
    }, 2000);
  };

  const showCorrectIncorrectPopup = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
      if (currentQuestionIndex === totalQuestions - 1) {
        handleEnd();
      } else {
        handleNext();
      }
    }, 2000);
  };

  const handleSubmit = () => {
    if (selectedButtons.length === 0) {
      toggleErrorPopup();
      return;
    }

    const isCorrect = correctAnswers[currentAlphabet].every((value) =>
      selectedButtons.includes(value)
    );

    setAnswerCorrect(isCorrect);

    if (isCorrect) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      showCorrectIncorrectPopup();
    } else {
      toggleModal();
      setSelectedButtons([]);
      handleNext();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAlphabet(
        String.fromCharCode(currentAlphabet.charCodeAt(0) + 1)
      );
    }
  };

  const handleEnd = () => {
    console.log("End of questions");
    navigation.navigate("LastPage");
    // Here navigate to a last screen, show results, etc.
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionCountContainer}>
        <Text style={styles.questionCountText}>
          Question {currentQuestionIndex + 1} out of {totalQuestions}
        </Text>
      </View>

      <Text style={styles.question}>
        Wählen Sie Punkte aus, die für die Alphabet{currentAlphabet} stehen, und
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
              Please select the numbers, then press submit
            </Text>
          </View>
        </Modal>
      </View>

      <View style={styles.buttonNCContainer}>
        <TouchableOpacity
          style={styles.btnClear}
          onPress={() => {
            handleClear();
          }}
        >
          <Text style={styles.bottomButtonText}>
            {selectedButtons.length > 0 ? "Klar" : "Zurück"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={styles.bottomButtonText}>
            {currentQuestionIndex === totalQuestions - 1 ? "FERTIG" : "Prüfen"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PracticeAlphabets;
