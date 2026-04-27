import React, { useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Switch, Alert, Linking, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { useAppTheme } from '../context/ThemeContext';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import Footer from '../components/Footer';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const { theme, isDark, toggleTheme } = useAppTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();

      return () => {};
    }, [fadeAnim])
  );

  const handleGithub = async () => {
    await Linking.openURL('https://github.com/lucasjdutra');
    setTimeout(() => {
      Linking.openURL('https://github.com/thethalles');
    }, 500);
  };

  const handleLinkedin = async () => {
    await Linking.openURL('https://www.linkedin.com/in/lucasjdutra/');
    setTimeout(() => {
      Linking.openURL('https://www.linkedin.com/in/thalles-santana011/');
    }, 500);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
          <Text style={[styles.logo, { color: theme.colors.text }]}>
            DEV.<Text style={[styles.logoHighlight, { color: theme.colors.primary }]}>BATEMAN</Text>
          </Text>

          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://imgur.com/3AlsjtF.png' }} 
              style={[styles.image, { borderColor: theme.colors.border, backgroundColor: theme.colors.surface }]} 
            />
          </View>

          <Text style={[styles.title, { color: theme.colors.text }]}>
            Eleve seu negócio com um <Text style={{ color: theme.colors.accent }}>front-end de matar.</Text>
          </Text>
          
          <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
            Eu tenho todas as hard-skills de um desenvolvedor front-end: React, TypeScript, Expo... mas nenhuma emoção humana identificável, exceto pela ganância por performance. Eu programo porque preciso manter minha rotina. Minha especialidade? Interfaces tão limpas que você poderia se ver nelas.
          </Text>

          <CustomButton 
            title="Sobre mim" 
            onPress={() => navigation.navigate('About')} 
          />

          <CustomButton 
            title="Entre em contato!" 
            variant="outline"
            onPress={() => Alert.alert("Contato", "Tenho uma reserva no Dorsia às 20h. Tente mais tarde.")} 
          />

          <View style={[styles.switchContainer, { borderTopColor: theme.colors.border }]}>
            <Text style={[styles.switchText, { color: theme.colors.text }]}>Modo Executivo</Text>
            <Switch
              trackColor={{ false: '#767577', true: theme.colors.accent }}
              thumbColor={isDark ? theme.colors.primary : '#f4f3f4'}
              onValueChange={toggleTheme}
              value={isDark}
            />
          </View>

          <Text style={[styles.socialTitle, { color: theme.colors.textSecondary }]}>Minhas Redes (Seja elegante):</Text>
          
          <SocialButton 
            title="GitHub" 
            iconName="github" 
            onPress={handleGithub} 
          />
          
          <SocialButton 
            title="LinkedIn" 
            iconName="linkedin" 
            onPress={handleLinkedin} 
          />
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
  image: { width: 220, height: 220, borderRadius: 4, borderWidth: 1 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 20, lineHeight: 28, textTransform: 'uppercase' },
  description: { fontSize: 14, lineHeight: 22, marginBottom: 30, fontStyle: 'italic' },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20, borderTopWidth: 0.5, paddingTop: 20 },
  switchText: { fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 },
  socialTitle: { fontSize: 12, marginBottom: 15, textAlign: 'center', textTransform: 'uppercase' },
});