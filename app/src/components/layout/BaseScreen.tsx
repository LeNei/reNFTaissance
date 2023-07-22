import { SafeAreaView, ScrollView } from 'react-native'
import { YStack, useTheme } from 'tamagui'
import { Appbar } from './Appbar'

export function BaseScreen({ children }: any) {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundStrong.val }}>
      <Appbar />
      <YStack
        f={1}
        ai="center"
        bg="$backgroundStrong"
        style={{ width: "100%" }}
      >
        <ScrollView style={{ width: "100%" }}>
          {children}
        </ScrollView>
      </YStack>
    </SafeAreaView>
  )
}
