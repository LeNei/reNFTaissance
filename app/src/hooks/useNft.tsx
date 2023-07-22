import { ethers } from "ethers";
import { useMemo } from "react";
import { useWeb3Provider } from "./useWeb3Provider";
import ABI from "../../contracts/artnft.json";

const CONTRACT_ADDRESS = "0x94c99a6cDdBE711cF5b6679D1027fde0F56cBa7D"

export function useNft() {
  const { signer } = useWeb3Provider();

  const contract = useMemo(() => {
    if (!signer) return;
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      signer
    )
  }, [signer])

  return contract
}
