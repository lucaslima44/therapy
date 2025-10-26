import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gradientProps } from "./../../styles/colors";
import { styles } from "./styles";


const MyButton = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.7}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default function WelcomeScreen({ navigation }) {

  const handleLoginPress = () => {
    navigation.navigate('Login');
}
  return (
    
    <LinearGradient style={styles.gradientContainer} {...gradientProps}>
      
      
      <View style={styles.content}>
        
        <View style={styles.boxTop}>
          <Image
            source={require("./../../../assets/logoT.png")}
            style={styles.logoImage}
          />
        </View>

        <View style={styles.boxMid}>
          <Text style={styles.logoNome}>THERAPY ROOM</Text>
          
          <Text style={styles.logoSlogan}>AUTOCUIDADO COMEÇA AQUI</Text>
          <Text style={styles.logoSlogan}>A MUDANÇA COMEÇA AGORA</Text>

        </View>

        <View style={styles.boxBottom}>
          <MyButton 
            title="Começar" 
            onPress={handleLoginPress}
            style={styles.buttonPrimary}
            textStyle={styles.buttonPrimaryText}
          />
          <MyButton
            title="Sou profissional"
            onPress={() => console.log("Profissional pressionado")}
            style={styles.buttonSecondary}
            textStyle={styles.buttonSecondaryText}
          />
        </View>

      </View>
    </LinearGradient>
  );
}