import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { theme } from '../styles/theme';

interface Props {
  title: string;
  iconName: string;
  onPress: () => void;
}

export default function SocialButton({ title, iconName, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName as any} size={20} color={theme.colors.primary} />
      </View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.spacer} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surface, padding: 16, borderRadius: 2, marginBottom: 10 },
  iconContainer: { width: 30 },
  text: { color: theme.colors.text, fontSize: 14, flex: 1, textAlign: 'center', letterSpacing: 1 },
  spacer: { width: 30 },
});