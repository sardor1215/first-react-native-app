import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Button
          title="Press Me"
          onPress={() => Alert.alert('Button Pressed!')}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;
