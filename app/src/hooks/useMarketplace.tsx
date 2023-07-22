import { ethers } from "ethers";
import { useMemo } from "react";
import { useWeb3Provider } from "./useWeb3Provider";
import ABI from "../../contracts/artnft.json";

const CONTRACT_ADDRESS = "0x91b9453c41745192f4504Bc62307859a83C4D57B"

export function useMarketplace() {
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
