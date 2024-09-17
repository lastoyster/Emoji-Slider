import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [rating, setRating] = React.useState(3); // Default rating

  const getRatingEmoji = () => {
    switch (rating) {
      case 1:
        return '😡'; // Angry face
      case 2:
        return '😫'; // Disappointed face
      case 3:
        return '😶'; // Neutral face
      case 4:
        return '🙂'; // Slightly smiling face
      case 5:
        return '😁'; // Happy face
      default:
        return '😶'; // Neutral face as default
    }
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={rating}
        onValueChange={setRating}
        minimumTrackTintColor="#1E90FF" // Adding some color
        maximumTrackTintColor="#d3d3d3"
        accessibilityLabel="Rating Slider"
      />
      <Text style={styles.emojiText}>
        {getRatingEmoji()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 200,
    height: 40,
  },
  emojiText: {
    fontSize: 50,
    marginTop: 20,
  },
});
