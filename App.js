import React, { useState } from "react";
import { 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Keyboard, 
  View 
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage("Số điện thoại hợp lệ!");
    } else {
      setErrorMessage("Số điện thoại không hợp lệ!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Nhập số điện thoại</Text>
        </View>
        <View style={styles.desc}>
          <Text>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>
        </View>
        <View style={styles.inputText}>
          <TextInput
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="numeric"
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
        <View>
          <TouchableOpacity 
            style={styles.buttonOpacity} 
            onPress={() => validatePhoneNumber(phoneNumber)}
          >
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 40,
  },
  header: {
    paddingBottom: 10,
    marginBottom: 60,
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
  },
  desc: {
    marginBottom: 10,
  },
  inputText: {
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  buttonOpacity: {
    backgroundColor: "#0000FF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
