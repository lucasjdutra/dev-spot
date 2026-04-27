import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Switch, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../styles/theme';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import Footer from '../components/Footer';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(previousState => !previousState);
    Alert.alert("Status", "A rotina matinal não pode ser interrompida.");
  };

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

        <Text style={styles.title}>
          Eleve seu negócio com um <Text style={styles.highlight}>front-end de matar.</Text>
        </Text>
        
        <Text style={styles.description}>
          Eu tenho todas as características de um desenvolvedor front-end: React, TypeScript, Expo... mas nenhuma emoção humana identificável, exceto pela ganância por performance. Eu programo porque preciso manter minha rotina matinal. Minha especialidade? Interfaces tão limpas que você poderia se ver nelas.
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

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Modo Executivo</Text>
          <Switch
            trackColor={{ false: '#333', true: theme.colors.primary }}
            thumbColor={isSwitchOn ? theme.colors.accent : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isSwitchOn}
          />
        </View>

        <Text style={styles.socialTitle}>Minhas Redes (Seja elegante):</Text>
        
        <SocialButton 
          title="GitHub" 
          iconName="github" 
          onPress={() => Linking.openURL('https://github.com')} 
        />

        <SocialButton 
          title="LinkedIn" 
          iconName="linkedin" 
          onPress={() => Linking.openURL('https://linkedin.com')} 
        />

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
  image: { width: 220, height: 220, borderRadius: 4, borderWidth: 1, borderColor: '#333', backgroundColor: '#000' },
  title: { color: theme.colors.text, fontSize: 22, fontWeight: '600', marginBottom: 20, lineHeight: 28, textTransform: 'uppercase' },
  highlight: { color: theme.colors.accent },
  description: { color: theme.colors.textSecondary, fontSize: 14, lineHeight: 22, marginBottom: 30, fontStyle: 'italic' },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20, borderTopWidth: 0.5, borderTopColor: '#333', paddingTop: 20 },
  switchText: { color: theme.colors.text, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 },
  socialTitle: { color: theme.colors.textSecondary, fontSize: 12, marginBottom: 15, textAlign: 'center', textTransform: 'uppercase' },
});