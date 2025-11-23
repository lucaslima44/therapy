import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function ParceirosScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ swipeEnabled: false });
    return () => {
      navigation.getParent()?.setOptions({ swipeEnabled: true });
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* --- HEADER FIXO --- */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Parceiros</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* --- CONTEÚDO --- */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.introText}>
          Conheça nossos parceiros que colaboram para promover bem-estar e
          qualidade de vida aos nossos usuários.
        </Text>

        {/* --- CARD 1: WELLHUB --- */}
        <View style={styles.partnerCard}>
          <Image
            source={require("./../../../../assets/wellhub.webp")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.nomeParceiro}>Wellhub</Text>
          <Text style={styles.categoriaParceiro}>Benefício Corporativo</Text>

          <View style={styles.divider} />

          <Text style={styles.descricaoParceiro}>
            Aproveite seu plano corporativo. Usuários Wellhub têm acesso
            facilitado à nossa rede de psicólogos, integrando o cuidado da mente
            com sua rotina de exercícios.
          </Text>
        </View>

        {/* --- CARD 2: HOSPITAL SP --- */}
        <View style={styles.partnerCard}>
          <Image
            source={require("./../../../../assets/hospitalSaoPaulo.webp")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.nomeParceiro}>Hospital São Paulo</Text>
          <Text style={styles.categoriaParceiro}>Suporte e Orientação</Text>

          <View style={styles.divider} />

          <Text style={styles.descricaoParceiro}>
            Segurança em primeiro lugar. Dependendo da gravidade ou necessidade
            clínica identificada na triagem, orientamos o encaminhamento direto
            para o atendimento presencial no HSP.
          </Text>
        </View>

        {/* --- CARD 3: ÍTALO --- */}
        <View style={styles.partnerCard}>
          <Image
            source={require("./../../../../assets/italo.webp")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.nomeParceiro}>Centro Universitário Ítalo</Text>
          <Text style={styles.categoriaParceiro}>Parceria Estudantil</Text>

          <View style={styles.divider} />

          <Text style={styles.descricaoParceiro}>
            Incentivo à educação e saúde mental. Matricule-se em qualquer curso
            da Ítalo e ganhe a 1ª sessão de terapia gratuita, além de descontos
            exclusivos nos pacotes mensais.
          </Text>
        </View>

        <View style={{ marginBottom: 40 }} />
      </ScrollView>
    </View>
  );
}
