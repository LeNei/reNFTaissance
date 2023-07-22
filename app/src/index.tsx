import { NavigationContainer } from '@react-navigation/native';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { YStack, Button, Text } from 'tamagui'
import { Auctions } from './screens';
import { Auction } from './screens/Auction';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet } from 'react-native';
import { LogIn } from '@tamagui/lucide-icons';

const Stack = createStackNavigator();

export function App() {
  const { open, address } = useWalletConnectModal();

  return (
    <NavigationContainer>
      {!address ? (
        <YStack f={1}>
          <ImageBackground source={require("../assets/splash.png")} style={styles.image}>
            <Button icon={LogIn} onPress={() => open()} style={{ width: 250, marginTop: 250 }} textAlign="center" size="$6">
              <Text fontSize="$6" style={{ fontFamily: "SilkScreen", textAlign: "center" }}>Connect Wallet</Text>
            </Button>
          </ImageBackground>
        </YStack>
      ) :
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName='Home'>
          <Stack.Screen
            name="Auctions"
            component={Auctions}
          />
          <Stack.Screen
            name="Single Auction"
            component={Auction}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
