import { useState } from "react";
import { Button, Popover, YStack, XStack, Label, Input, Adapt, H2 } from "tamagui";

export function BidButton() {
  const [open, setOpen] = useState(false);
  return (
    <Popover size="$5" allowFlip placement="top" open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <Button onPress={() => setOpen(true)}>Place Bid</Button>
      </Popover.Trigger>

      <Adapt when="sm" platform="touch">
        <Popover.Sheet snapPoints={[30, 50, 25]} modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame space bottom={0} padding="$4">
            <Adapt.Contents />
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ x: 0, y: -10, opacity: 0 }}
        exitStyle={{ x: 0, y: -10, opacity: 0 }}
        x={0}
        y={0}
        opacity={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        elevate
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack space="$3">
          <H2 mt="$4" style={{ fontFamily: "SilkScreen" }}>Place Your Bid</H2>
          <XStack space="$3">
            <Label size="$3" >
              Name
            </Label>
            <Input size="$3" flexGrow={1} keyboardType="numeric" />
          </XStack>
          <Popover.Close asChild>
            <Button
              size="$3"
              textAlign="center"
              onPress={() => {
                setOpen(false);
              }}
            >
              Place Bid
            </Button>
          </Popover.Close>
        </YStack>
      </Popover.Content>

    </Popover>
  )
}
