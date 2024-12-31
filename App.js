import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Đăng nhập</Text>
    </View>
  );
};

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    console.log("Button Pressed");
    console.log("Phone Number: ", phoneNumber);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.innerContainer}>
          <Header />
          <Text style={styles.text}>Nhập số điện thoại</Text>
          <Text style={styles.description}>
            Dùng số điện thoại của bạn để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="phone-pad"
            autoFocus={true}  // Tự động focus vào TextInput khi mở app
            returnKeyType="next"
            onChangeText={setPhoneNumber}  // Lưu giá trị khi thay đổi
            value={phoneNumber}  // Liên kết giá trị với state
            onFocus={() => console.log('TextInput Focused')}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20, // Tạo khoảng cách giữa TextInput và nút
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginLeft: 8,
  },
  input: {
    height: 40,
    width: '100%',
    maxWidth: 350,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#D3D3D3',  // Màu nền xám trắng cho button
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
