import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Entypo from "@expo/vector-icons/Entypo";

export function ArrowLeft({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name="arrow-with-circle-left"  style={styles.arrowleft}/>
    </TouchableOpacity>
  );
}
