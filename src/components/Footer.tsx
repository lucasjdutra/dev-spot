import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useAppTheme();

  return (
    <View style={[styles.footer, { borderTopColor: theme.colors.border }]}>
      <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>Desenvolvido por Lucas Dutra & Thalles Santana.</Text>
      <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>Impressão em papel linho com marca d'água Silvianian.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { borderTopWidth: 1, padding: 25, alignItems: 'center' },
  footerText: { fontSize: 10, textAlign: 'center', marginBottom: 4 }
});