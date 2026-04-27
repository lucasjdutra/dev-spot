import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Desenvolvido por Lucas Dutra & Thalles Santana.</Text>
      <Text style={styles.footerText}>Impressão em papel linho com marca d'água Silvianian.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { borderTopWidth: 1, borderTopColor: '#222', padding: 25, alignItems: 'center' },
  footerText: { color: theme.colors.textSecondary, fontSize: 10, textAlign: 'center', marginBottom: 4 }
});