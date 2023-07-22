import { XStack, Paragraph, Card, CardProps, Image, SizableText, YStack } from 'tamagui'
import { Countdown } from './Countdown';
import dayjs from 'dayjs';

interface AuctionCardProps extends CardProps {
  title: string;
  startDate: Date;
  endDate: Date;
  currentBid?: number;
  img: string;
}

export function AuctionCard({ title, startDate, endDate, img, currentBid, ...props }: AuctionCardProps) {
  const started = dayjs().isAfter(startDate)
  const ended = dayjs().isAfter(endDate)

  return (
    <Card
      elevate
      size="$4"
      bordered
      pressStyle={{ scale: 0.925 }}
      animation="bouncy"
      {...props}
    >
      <Card.Header px="$2" py="$4">
        <XStack px="$2" py="$1" backgroundColor="$backgroundFocus" borderRadius="$2" >
          {!ended &&
            <XStack ai="center" jc="space-between" flexGrow={1}>
              <Paragraph theme="alt2" textAlign="center">{started ? "Ends In" : "Starts In"}:</Paragraph>
              <Paragraph theme="alt2" textAlign="center"><Countdown endTime={startDate} /></Paragraph>
            </XStack>
          }
          {ended && <Paragraph theme="alt2" textAlign="center">Auction has ended</Paragraph>}
        </XStack>
      </Card.Header>
      <Image
        resizeMode='contain'
        alignSelf='center'
        source={{
          width: 100,
          height: 100,
          uri: img
        }}
      />
      <Card.Footer mt="$4" p="$2" backgroundColor="$backgroundFocus" borderBottomLeftRadius="$2" borderBottomRightRadius="$2">
        <YStack space="$1" flexGrow={1}>
          <SizableText size="$5" fontWeight="bold">{title}</SizableText>
          {currentBid &&
            <XStack ai="center" jc="space-between">
              <SizableText size="$3" fontWeight="bold">Highest Bid:</SizableText>
              <SizableText size="$3" fontWeight="bold">{currentBid} ETH</SizableText>
            </XStack>}
        </YStack>
      </Card.Footer>
    </Card>
  )

}
