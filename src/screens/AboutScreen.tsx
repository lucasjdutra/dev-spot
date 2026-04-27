import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';

export default function AboutScreen() {
  const navigation = useNavigation();
  const { theme } = useAppTheme();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={[styles.logo, { color: theme.colors.text }]}>
            DEV.<Text style={[styles.logoHighlight, { color: theme.colors.primary }]}>BATEMAN</Text>
          </Text>

          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://imgur.com/3AlsjtF.png' }} 
              style={[styles.image, { borderColor: theme.colors.primary }]} 
            />
          </View>

          <Text style={[styles.title, { color: theme.colors.text }]}>Sobre mim</Text>
          
          <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>
            Meu nome é Patrick Bateman e tenho 27 anos. Atuo como desenvolvedor de software e levo minha rotina de trabalho com disciplina extrema. Mantenho uma organização rigorosa no meu código, sigo boas práticas de arquitetura e me preocupo com cada detalhe de performance, usabilidade e consistência visual. Se começo um projeto, busco sempre elevar o nível de refinamento técnico até o limite. Consigo trabalhar por longos períodos focado em resolver problemas complexos e otimizar sistemas. Sempre priorizo soluções eficientes, com baixa dívida técnica e boa experiência para o usuário final.
          </Text>

          {/* Botão de Voltar */}
          <View style={styles.buttonContainer}>
            <CustomButton 
              title="Voltar para Home" 
              onPress={() => navigation.goBack()} 
            />
          </View>
        </Animated.View>

      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContainer: { padding: 24, paddingBottom: 24 },
  logo: { fontSize: 20, letterSpacing: 4, fontWeight: '300', textAlign: 'center', marginBottom: 30 },
  logoHighlight: { fontWeight: 'bold' },
  imageContainer: { alignItems: 'center', marginBottom: 30 },
  image: { width: 150, height: 150, borderRadius: 75, borderWidth: 1 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textTransform: 'uppercase' },
  paragraph: { fontSize: 15, lineHeight: 24, marginBottom: 24, textAlign: 'justify', fontStyle: 'italic' },
  buttonContainer: { marginTop: 10, width: '100%' }
});