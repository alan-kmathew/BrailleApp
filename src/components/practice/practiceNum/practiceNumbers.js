import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./practiceNumbersStyles";
import { useNavigation } from "@react-navigation/native";
import { fetchData } from '../../api';



const PracticeNumbers = () => {
  const navigation = useNavigation();
  const [totalQuestions, setTotalQuestions] = useState();
  const [numberArray, setNumberArray] = useState([]);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [isErrorPopupVisible, setErrorPopupVisible] = useState(false);
  const [errorPopupTimer, setErrorPopupTimer] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  // const correctAnswers = [[1], [1, 2], [1, 3, 5], [2, 5, 6], [1, 4, 6]];

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const responseData = await fetchData('/get/numbers');
        if (responseData && responseData.numbers) {
          console.log("responseData----------->", responseData);
          setTotalQuestions(responseData.numbers.length);
          setNumberArray(responseData.numbers);
        } else {
          console.error('Invalid data format:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNumbers();
  }, []);

  const currentNumber = numberArray[currentNumberIndex];

 

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
    let isCorrect = false;
    if (selectedButtons.length === 0) {
      toggleErrorPopup();
      return;
    }
    const correctAnswers = [{ 0: [2, 4, 5] }, { 1: [1] }, { 2: [1, 2] }, { 3: [1, 4] }, { 4: [1, 4, 5] }, { 5: [1, 5] }, { 6: [1, 2, 4] }, { 7: [1, 2, 4, 5,] }, { 8: [1, 2, 5] }, { 9: [2, 4] }];

    for (const [k, v] of Object.entries(correctAnswers)) {
      if (parseInt(k) === parseInt(currentNumber)) {
        const values = v;
        const rightAnswer =  Array.from(values[currentNumber]);
        console.log("dvsfvfddfvdf------------->",typeof(rightAnswer),typeof(selectedButtons));
        if (JSON.stringify(selectedButtons) === JSON.stringify(values[currentNumber])) {
          setAnswerCorrect(true);
          console.log("booleanvalue")
        }
      }
    }





    if (isCorrect) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }

    if (currentNumberIndex <= numberArray.length - 1) {
      setCurrentNumberIndex(currentNumberIndex + 1);
      clearErrorPopupTimer();
      toggleModal(); 
    }

    // setCurrentNumberIndex((prevIndex) => prevIndex + 1);
    // clearErrorPopupTimer();
    // toggleModal();
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
      if (currentNumberIndex + 1 === totalQuestions) {
        navigation.navigate("LastPage", { word: "ZAHLEN" });
        setSelectedButtons([]);
      }
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.questionCountContainer}>
        <Text style={styles.questionCountText}>
          Question {currentNumberIndex + 1} out of {numberArray.length}
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
        {selectedButtons.length === 0 && (
          <TouchableOpacity style={styles.btnClear} onPress={() => navigation.goBack()}>
            <Text style={styles.bottomButtonText}>Zurück</Text>
          </TouchableOpacity>
        )}
        {selectedButtons.length > 0 && (
          <TouchableOpacity style={styles.btnClear} onPress={() => {
            clearErrorPopupTimer();
            handleClear();
          }}>
            <Text style={styles.bottomButtonText} >Klar</Text>
          </TouchableOpacity>
        )}
        {/* <TouchableOpacity
          style={styles.btnClear}
          onPress={() => {
            clearErrorPopupTimer();
            handleClear();
          }}
        >
          <Text style={styles.bottomButtonText}>
            {selectedButtons.length > 0 ? "Klar" : "Zurück"}
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            clearErrorPopupTimer();
            handleSubmit();
          }}
        >
          <Text style={styles.bottomButtonText}>
            {currentNumberIndex === numberArray.length - 1 ? "FERTIG" : "Prüfen"}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default PracticeNumbers;
