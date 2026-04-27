import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAppTheme } from '../context/ThemeContext';

interface Props {
  title: string;
  iconName: string;
  onPress: () => void;
}

export default function SocialButton({ title, iconName, onPress }: Props) {
  const { theme } = useAppTheme();

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.surface }]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName as any} size={20} color={theme.colors.primary} />
      </View>
      <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
      <View style={styles.spacer} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 2, marginBottom: 10 },
  iconContainer: { width: 30 },
  text: { fontSize: 14, flex: 1, textAlign: 'center', letterSpacing: 1 },
  spacer: { width: 30 },
});