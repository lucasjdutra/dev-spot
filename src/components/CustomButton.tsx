import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
}

export default function CustomButton({ title, onPress, variant = 'primary' }: Props) {
  const { theme } = useAppTheme();
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isPrimary 
          ? { backgroundColor: theme.colors.primary } 
          : { backgroundColor: 'transparent', borderWidth: 1, borderColor: theme.colors.primary }
      ]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.text, 
        isPrimary 
          ? { color: theme.colors.background }
          : { color: theme.colors.primary }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { width: '100%', padding: 18, borderRadius: 2, alignItems: 'center', marginBottom: 15 },
  text: { fontSize: 14, fontWeight: 'bold', letterSpacing: 2, textTransform: 'uppercase' },
});