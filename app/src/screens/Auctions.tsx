import { YStack, XStack, H2 } from 'tamagui'
import { AuctionCard } from "../components/"
import dayjs from 'dayjs'
import { BaseScreen } from '../components/layout/BaseScreen'
import { useWeb3Provider } from '../hooks';
import { useEffect } from 'react';

const AUCTIONS = [
  {
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Fugio_cent.jpg/330px-Fugio_cent.jpg",
    "title": "Fugio cent, 1787",
    "description": "The Fugio cent, also known as the Franklin cent, is an intriguing coin with an interesting history. On the reverse side, the motto 'We are one' is accompanied by 13 chain links, symbolizing America's first 13 states."
  },
  {
    "img": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tiflis_stamp.jpg?20090314235250",
    "title": "Tiflis Stamp, 1857",
    "description": "The Tiflis Stamp, also known as the Tiflis Unique, is a rare and intriguing stamp from the Russian Empire, with a metallic sheet and embossed lettering. Only five exist."
  },
  {
    "img": "https://broaden-horizons.fr/wp-content/uploads/2020/03/le-louvre-18th-century-french-painting-private-tour-boucher-the-fountain-of-love-getty.jpg.webp",
    "title": "Painting 18th century",
    "description": "Paintings from the 18th century are an artistic reflection of the cultural, social, and political changes that occurred during this period. Often referred to as the 'Age of Enlightenment', the 18th century was a time of intellectual curiosity and progress, which also found expression in the world of art."
  },
  {
    "img": "https://upload.wikimedia.org/wikipedia/commons/9/91/Stamp_Canada_1851_12d_black_empress.jpg",
    "title": "12d Black Empress stamp",
    "description": "Canada's most valuable and sought-after basic stamp is the 1851 12d Black Empress. It had limited use, covering specific destinations and double-weight letters to the United States. Of the 51,000 originally printed, fewer than 145 are believed to exist today."
  },
  {
    "img": "https://thomasnumismatics.com/wp-content/uploads/2020/03/dollar-morgan-1884-o-new-york-hoard-ngc-ms-63-revers-1000x1002.jpg",
    "title": "Morgan Silver Dollar 1884",
    "description": "The 1884-S Morgan dollar stands out as a significant rarity in terms of its condition. While numerous San Francisco mintages exist, it appears that almost all of the 3.2 million 1884-S Morgan dollars entered circulation. The few that remained were likely melted down following the 1918 Pittman Act, resulting in an extreme scarcity of Mint State examples."
  }
]

export function Auctions({ navigation }: any) {
  const handleNavigate = () => navigation.navigate('Single Auction')
  const { signer, web3Provider } = useWeb3Provider();

  useEffect(() => {
    if (signer && web3Provider) {
      console.log("go");
      signer.getAddress().then(console.log);
      signer.getTransactionCount().then(console.log);
      web3Provider.getNetwork().then(console.log)
      web3Provider.getGasPrice().then(console.log)
      web3Provider.getCode("0x91b9453c41745192f4504Bc62307859a83C4D57B").then(console.log)
    }
  }, [web3Provider, signer])

  /* 
const nft = useNft();
useEffect(() => {
  if (nft) {
    const getAuctions = async () => {
      console.log("started nft")
      const tx = nft.name();
      console.log(tx, "nft")
      console.log(await tx)
    }
    getAuctions()
  }
}, [nft])
  const marketplace = useMarketplace();
  useEffect(() => {
    if (marketplace) {
      const getAuctions = async () => {
        console.log("started marketplace", marketplace)
        const tx = marketplace.getListedNfts();
        console.log(tx, "marketplace")
        console.log(await tx)
      }
      getAuctions()
    }
  }, [marketplace])
  */
  return (
    <BaseScreen>
      <YStack
        mt="$3"
        bg="$backgroundStrong"
        padding="$3"
        style={{ width: "100%" }}
      >
        <H2 style={{ fontFamily: "SilkScreen" }}>Running Auctions</H2>
        <XStack
          space="$4"
          mt="$4"
        >
          {AUCTIONS.slice(0, 2).map(({ title, img }, i) => (
            <AuctionCard
              key={i}
              title={title}
              startDate={dayjs().subtract(1, "day").toDate()}
              endDate={dayjs().add(2, "day").toDate()}
              img={img}
              currentBid={5.12}
              style={{ flexGrow: 1 }}
              onPress={handleNavigate}
            />
          ))}
        </XStack>
        <H2 style={{ fontFamily: "SilkScreen" }} mt="$4">Starting Soon</H2>
        {[...Array(2).keys()].map((i) => (
          <XStack
            space="$4"
            mt="$4"
            key={i}
          >
            {AUCTIONS.slice(i + 2, i + 2 + 2).map(({ title, img }, i) => (
              <AuctionCard
                key={i}
                title={title}
                startDate={dayjs().add(1, "day").toDate()}
                endDate={dayjs().add(2, "day").toDate()}
                img={img}
                style={{ flexGrow: 1 }}
                animation={undefined}
                pressStyle={undefined}
              />
            ))}
          </XStack>
        ))}
      </YStack>
    </BaseScreen>
  )
}


