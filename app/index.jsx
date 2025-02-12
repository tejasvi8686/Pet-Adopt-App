import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View>
      <Link href={"/login"}>

          <Text>Go To Login Screen</Text>

      </Link>
    </View>
  );
}
