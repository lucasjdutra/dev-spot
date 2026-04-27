import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
}

export default function CustomButton({ title, onPress, variant = 'primary' }: Props) {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity 
      style={[styles.button, isPrimary ? styles.primaryBg : styles.outlineBg]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.outlineText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { width: '100%', padding: 18, borderRadius: 2, alignItems: 'center', marginBottom: 15 },
  primaryBg: { backgroundColor: theme.colors.primary },
  outlineBg: { backgroundColor: 'transparent', borderWidth: 1, borderColor: theme.colors.primary },
  text: { fontSize: 14, fontWeight: 'bold', letterSpacing: 2, textTransform: 'uppercase' },
  primaryText: { color: '#000000' },
  outlineText: { color: theme.colors.primary },
});