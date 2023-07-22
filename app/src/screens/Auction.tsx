import { Card, H2, Image, XStack, YStack, Paragraph, H4, H3, YGroup, ListItem, Separator, Button } from "tamagui";
import { BaseScreen } from "../components/layout";
import { BidButton, Countdown } from '../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemeContext } from "../providers";
import dayjs from "dayjs";
import { Pressable } from "react-native";

const startDate = dayjs().add(1, "day").toDate();
const endDate = dayjs().add(2, "day").toDate();
const MAX = 12.032;

export function Auction({ navigation }: any) {
  const started = dayjs().isAfter(startDate)
  const ended = dayjs().isAfter(endDate)
  const { theme } = useThemeContext();

  return (
    <>
      <BaseScreen>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={theme === "light" ? "black" : "white"} style={{ marginLeft: 12 }} />
        </Pressable>
        <YStack
          mt="$3"
          bg="$backgroundStrong"
          padding="$3"
          style={{ width: "100%" }}
        >
          <Card padded>
            <Card.Header mb="$4">
              <XStack px="$2" py="$1" backgroundColor="$backgroundFocus" borderRadius="$2" >
                {!ended &&
                  <XStack ai="center" jc="space-between" flexGrow={1}>
                    <H4 theme="alt2" textAlign="center">{started ? "Ends In" : "Starts In"}:</H4>
                    <H4 theme="alt2" textAlign="center"><Countdown endTime={startDate} /></H4>
                  </XStack>
                }
                {ended && <Paragraph theme="alt2" textAlign="center">Auction has ended</Paragraph>}
              </XStack>
            </Card.Header>
            <Image
              resizeMode="contain"
              alignSelf="center"
              source={{
                width: 300,
                height: 300,
                uri: "https://www.nicepng.com/png/detail/965-9651318_download-10-selected-gold-coins-png-images-with.png"
              }}
            />
          </Card>
          <H2 mt="$4" style={{ fontFamily: "SilkScreen" }}>Auction 1</H2>
          <BidButton />
          <XStack>
            <H3>Highest bid: </H3>
            <H3 theme="alt2" style={{ fontFamily: "SilkScreen" }} ml="$4">12.032 ETH</H3>
          </XStack>
          <H4 my="$3">Bids:</H4>
          <YGroup separator={<Separator />}>
            {[...Array(11).keys()].map((i) => (
              <YGroup.Item key={i}>
                <ListItem>
                  <XStack ai="center" jc="space-between" flexGrow={1}>
                    <H4 theme="alt2" textAlign="center">{MAX - i} ETH</H4>
                    <H4 theme="alt2" textAlign="center">0x123...456</H4>
                  </XStack>
                </ListItem>
              </YGroup.Item>
            ))}
          </YGroup>
        </YStack>
      </BaseScreen>
    </>
  )
}
