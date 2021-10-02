import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImagePicker from 'react-native-image-crop-picker';

export default function Imagecrop() {
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
        });
      }
      const takePhotoFromGallary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
        });
        
      }
    
    return (
        <ScrollView>
        <View style={styles.inputButton}>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={takePhotoFromCamera}>
            <Text style={styles.buttonText}>Click to open camera</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={takePhotoFromGallary}>
            <Text style={styles.buttonText}>Choose from gallary</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    inputButton: {
      marginTop: 40,
      margin: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    roundButton1: {
      width: 290,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 60,
      backgroundColor: '#3154A5',
    },
  });