import { XStack, YStack, H4, Text, Switch, AlertDialog, Button } from 'tamagui'
import { Sun, Moon } from '@tamagui/lucide-icons'
import { useWalletConnectModal } from '@walletconnect/modal-react-native'
import { useThemeContext } from '../../providers';
import { useState } from 'react';
import { Pressable } from 'react-native';

export function Appbar() {
  const [showLogout, setShowLogout] = useState(false);
  const { address } = useWalletConnectModal();
  const { theme, setTheme } = useThemeContext();
  const { provider } = useWalletConnectModal();

  return (
    <>
      <XStack p="$3" ai="center" jc="space-between">
        <XStack ai="center">
          <Pressable onPress={() => setShowLogout(true)}>
            <YStack>
              <Text color="$gray10">{address?.slice(0, 5)}...{address?.slice(-4)}</Text>
              <H4 fontWeight="bold" mt="$-2" style={{ fontFamily: "SilkScreen" }}>reNFTaissance</H4>
            </YStack></Pressable>
        </XStack>
        <XStack ai="center" space="$2">
          <Sun />
          <Switch
            size="$2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          >
            <Switch.Thumb animation="bouncy" />
          </Switch>
          <Moon />
        </XStack>
      </XStack>
      <AlertDialog native open={showLogout} onOpenChange={setShowLogout}>
        <AlertDialog.Trigger></AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}
          >
            <YStack space>
              <AlertDialog.Title>Logout</AlertDialog.Title>
              <AlertDialog.Description>
                Do you want to log out of the application?
              </AlertDialog.Description>
              <XStack space="$3" justifyContent="flex-end">
                <AlertDialog.Cancel asChild>
                  <Button>Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild onPress={() => provider?.disconnect()}>
                  <Button theme="active">Logout</Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </>
  )
}
