import { Alert, StyleSheet, Button, View,Text,Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import * as Haptics from 'expo-haptics';
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePick({onTakeImage}) {
  const [cameraPermissionInformattion, requestPermission] =
    useCameraPermissions();
  const [pickedImageUir, setPickedImageUri] = useState();
  async function verifyPermissions() {
    if (cameraPermissionInformattion.status === PermissionStatus.UNDETERMINED) {
      const PermissionStatus = await requestPermission();
      return PermissionStatus.granted;
    }
    if (cameraPermissionInformattion.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permisions!",
        "You need to grant camera permission to use this app!"
      );
      return false;
    }
    return true;
  }
  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImageUri(image.assets[0].uri);
    
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
     onTakeImage(image.assets[0].uri);


  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImageUir) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: pickedImageUir }} />
    );
  }

  return (
    <>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    
    margin:'2.5%',
    width: "95%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    borderRadius:5,
    width: "100%",
    height: "100%",
  },
});
