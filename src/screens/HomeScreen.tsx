import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  Switch, 
  Alert, 
  TouchableOpacity,
  Linking 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const COLORS = {
  background: '#000000',
  surface: '#111111', 
  primary: '#E5E5E5',
  accent: '#BC0000', 
  text: '#FFFFFF',
  textSecondary: '#888888',
};

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

        <TouchableOpacity 
          style={[styles.button, styles.primaryBg]} 
          onPress={() => navigation.navigate('About')} 
          activeOpacity={0.9}
        >
          <Text style={[styles.buttonText, styles.primaryText]}>Sobre mim</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.outlineBg]} 
          onPress={() => Alert.alert("Contato", "Tenho uma reserva no Dorsia às 20h. Tente mais tarde.")} 
          activeOpacity={0.8}
        >
          <Text style={[styles.buttonText, styles.outlineText]}>Entre em contato!</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Modo Executivo</Text>
          <Switch
            trackColor={{ false: '#333', true: COLORS.primary }}
            thumbColor={isSwitchOn ? COLORS.accent : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isSwitchOn}
          />
        </View>

        <Text style={styles.socialTitle}>Minhas Redes (Seja elegante):</Text>
        
        <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://github.com')}>
          <View style={styles.iconContainer}><FontAwesome5 name="github" size={20} color={COLORS.primary} /></View>
          <Text style={styles.socialText}>GitHub</Text>
          <View style={styles.spacer} /> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://linkedin.com')}>
          <View style={styles.iconContainer}><FontAwesome5 name="linkedin" size={20} color={COLORS.primary} /></View>
          <Text style={styles.socialText}>LinkedIn</Text>
          <View style={styles.spacer} /> 
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por Lucas Dutra & Thalles Santana.</Text>
        <Text style={styles.footerText}>Impressão em papel linho com marca d'água Silvianian.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  scrollContainer: { padding: 24, paddingBottom: 24 },
  
  logo: { color: COLORS.text, fontSize: 20, letterSpacing: 4, fontWeight: '300', textAlign: 'center', marginBottom: 30 },
  logoHighlight: { fontWeight: 'bold', color: COLORS.primary },
  
  imageContainer: { alignItems: 'center', marginBottom: 30 },
  image: { 
    width: 220, 
    height: 220, 
    borderRadius: 4, 
    borderWidth: 1, 
    borderColor: '#333',
    backgroundColor: '#000' 
  },
  
  title: { color: COLORS.text, fontSize: 22, fontWeight: '600', marginBottom: 20, lineHeight: 28, textTransform: 'uppercase' },
  highlight: { color: COLORS.accent },
  description: { color: COLORS.textSecondary, fontSize: 14, lineHeight: 22, marginBottom: 30, fontStyle: 'italic' },
  
  button: { width: '100%', padding: 18, borderRadius: 2, alignItems: 'center', marginBottom: 15 }, // Botões mais quadrados
  primaryBg: { backgroundColor: COLORS.primary },
  outlineBg: { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.primary },
  buttonText: { fontSize: 14, fontWeight: 'bold', letterSpacing: 2, textTransform: 'uppercase' },
  primaryText: { color: '#000000' },
  outlineText: { color: COLORS.primary },
  
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20, borderTopWidth: 0.5, borderTopColor: '#333', paddingTop: 20 },
  switchText: { color: COLORS.text, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 },
  
  socialTitle: { color: COLORS.textSecondary, fontSize: 12, marginBottom: 15, textAlign: 'center', textTransform: 'uppercase' },
  socialButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.surface, padding: 16, borderRadius: 2, marginBottom: 10 },
  iconContainer: { width: 30 },
  socialText: { color: COLORS.text, fontSize: 14, flex: 1, textAlign: 'center', letterSpacing: 1 },
  spacer: { width: 30 },

  footer: { borderTopWidth: 1, borderTopColor: '#222', padding: 25, alignItems: 'center' },
  footerText: { color: COLORS.textSecondary, fontSize: 10, textAlign: 'center', marginBottom: 4 }
});