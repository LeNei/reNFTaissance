import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";

export function useWeb3Provider() {
  const { provider } = useWalletConnectModal();
  const [web3Provider, setWeb3Provider] = useState<ethers.providers.Web3Provider | undefined>(undefined);
  useEffect(() => {
    if (!web3Provider && provider) {
      setWeb3Provider(new ethers.providers.Web3Provider(provider))
    }
  }, [provider, web3Provider])

  const signer = useMemo(
    () => (web3Provider ? web3Provider.getSigner() : undefined),
    [web3Provider],
  );
  return { web3Provider, signer };
}
