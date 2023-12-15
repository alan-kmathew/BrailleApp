import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from "./../../styles/QuestionDraft.styles";
import { updateData, fetchData } from '../api';

const QuestionDraftScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  const [checkedNumbers, setCheckedNumbers] = useState(Array(10).fill(false));
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCheckBoxToggle = (index) => {
    const updatedCheckedNumbers = [...checkedNumbers];
    updatedCheckedNumbers[index] = !updatedCheckedNumbers[index];
    setCheckedNumbers(updatedCheckedNumbers);
  };

  const handleSamplePreview = () => {
    // Handle the action for the "Sample Preview" button
    console.log('Sample Preview pressed');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveChanges = async (selectedNumbers) => {
    try {
      console.log('Selected Numbers:', selectedNumbers);

      const updatedData = {
        numbers: selectedNumbers,
      };

      const result = await updateData('add', updatedData);
      console.log('Data updated successfully:', result);
      if (result.message == 'Numbers added successfully') {
        fetchData('/get/numbers');
        toggleModal();
      }
      // Refresh data after update

    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const getSelectedNumbers = () => {
    return checkedNumbers
      .map((checked, index) => (checked ? index : null))
      .filter((index) => index !== null);
  };

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const responseData = await fetchData('/get/numbers');
        if (responseData && responseData.numbers) {
          const selectedNumbers = responseData.numbers;
          setCheckedNumbers((prevCheckedNumbers) =>
            prevCheckedNumbers.map((_, index) => selectedNumbers.includes(index))
          );
        } else {
          console.error('Invalid data format:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNumbers();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.text}>Questions Draft</Text>

      {/* Note Sentence */}
      <Text style={styles.p1text}>Note - * marked questions are previously selected.</Text>

      {/* Checkbox Section */}
      <View style={styles.checkboxSection}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, index) => (
          <View key={number} style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              checkBoxColor="yellow"
              checkedCheckBoxColor="yellow"
              uncheckedCheckBoxColor="yellow"
              isChecked={checkedNumbers[index]}
              onClick={() => handleCheckBoxToggle(index)}
            />
            <Text style={styles.checkboxLabel}>{`Q. Find numbers‘${number}’?'`}</Text>
          </View>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSamplePreview}>
          <Text style={styles.buttonText} onPress={() => navigation.goBack()}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSaveChanges(getSelectedNumbers())}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Changes saved successfully!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                toggleModal();
              }}
            >
              <Text style={styles.buttonOk}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuestionDraftScreen;
