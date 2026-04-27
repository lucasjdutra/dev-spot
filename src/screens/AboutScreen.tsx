import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../styles/theme';
import Footer from '../components/Footer';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.logo}>DEV.<Text style={styles.logoHighlight}>BATEMAN</Text></Text>

        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://imgur.com/3AlsjtF.png' }} 
            style={styles.image} 
          />
        </View>

        <Text style={styles.title}>Sobre mim</Text>
        
        <Text style={styles.paragraph}>
          Meu nome é Patrick Bateman e tenho 27 anos. Atuo como desenvolvedor de software e levo minha rotina de trabalho com disciplina extrema. Mantenho uma organização rigorosa no meu código, sigo boas práticas de arquitetura e me preocupo com cada detalhe de performance, usabilidade e consistência visual. Se começo um projeto, busco sempre elevar o nível de refinamento técnico até o limite. Consigo trabalhar por longos períodos focado em resolver problemas complexos e otimizar sistemas. Sempre priorizo soluções eficientes, com baixa dívida técnica e boa experiência para o usuário final.
        </Text>

      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { padding: 24, paddingBottom: 24 },
  logo: { color: theme.colors.text, fontSize: 20, letterSpacing: 4, fontWeight: '300', textAlign: 'center', marginBottom: 30 },
  logoHighlight: { fontWeight: 'bold', color: theme.colors.primary },
  imageContainer: { alignItems: 'center', marginBottom: 30 },
  image: { width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: theme.colors.primary },
  title: { color: theme.colors.text, fontSize: 28, fontWeight: 'bold', marginBottom: 20, textTransform: 'uppercase' },
  paragraph: { color: theme.colors.textSecondary, fontSize: 15, lineHeight: 24, marginBottom: 16, textAlign: 'justify', fontStyle: 'italic' },
});