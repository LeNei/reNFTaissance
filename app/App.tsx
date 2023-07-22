import './expo-crypto-shim.js'

import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, YStack } from 'tamagui'
import { WalletConnectModal } from '@walletconnect/modal-react-native';
import { App as BaseApp } from "./src"
import { ThemeProvider } from './src/providers'

import config from './tamagui.config'

const projectId = 'd0f0274917ae60ae1b773f0c92cb587d';

const providerMetadata = {
  name: 'reNFTaissance',
  description: 'reNFTaissance enables good stuff',
  url: 'https://reNFTaissance.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
};

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    SilkScreen: require('@tamagui/font-silkscreen/files/slkscr.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider>
        <YStack f={1} backgroundColor={'$backgroundSoft'}>
          <BaseApp />
          <StatusBar style="auto" />
        </YStack>
        <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
