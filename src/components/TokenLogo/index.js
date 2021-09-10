import React, { useMemo } from "react";
import styled from "styled-components";
import MaticLogo from "../../assets/matic-logo.png";
import xDAILogo from "../../assets/xdai-logo.png";
import HNYLogo from "../../assets/ida_murni_master.png";
import {
  useNativeCurrencyWrapper,
  useSelectedNetwork,
} from "../../contexts/Network.js";
import { IDA_ADDRESS, SupportedNetwork } from "../../constants/index.js";
import { useTokenIcon } from "../../hooks/useTokenIcon.js";

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`;

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`;

const BAD_IMAGES = {};

export default function TokenLogo({
  address,
  defaultText = "?",
  header = false,
  size = "24px",
  ...rest
}) {
  const selectedNetwork = useSelectedNetwork();
  const nativeCurrencyWrapper = useNativeCurrencyWrapper();
  const tokenIcon = useTokenIcon(address);
  const sources = useMemo(() => {
    if (!address && !tokenIcon) return [];
    const lowercaseAddress = address.toLowerCase();
    if (lowercaseAddress === nativeCurrencyWrapper.address.toLowerCase()) {
      return [selectedNetwork === SupportedNetwork.XDAI ? xDAILogo : MaticLogo];
    }
    if (lowercaseAddress === IDA_ADDRESS[selectedNetwork].toLowerCase()) {
      return [HNYLogo];
    }
    return [tokenIcon];
  }, [address, tokenIcon, nativeCurrencyWrapper, selectedNetwork]);

  const source = sources.find((src) => !BAD_IMAGES[src]);

  if (!!!source) {
    const numberSize = size ? parseInt(size.replace("px", "")) : 24;
    const fontSize = Math.ceil(numberSize / 4.5);
    return (
      <Inline>
        <svg height={numberSize} width={numberSize} {...rest} fill="none">
          <circle
            cx={numberSize / 2}
            cy={numberSize / 2}
            r={numberSize / 2}
            fill="#fff"
          />
          <text
            fill="#000"
            stroke="none"
            fontSize={fontSize}
            fontWeight="600"
            x={numberSize / 2}
            y={numberSize / 2 + Math.floor(fontSize / 2)}
            textAnchor="middle"
          >
            {defaultText.length > 4
              ? `${defaultText.slice(0, 4).toUpperCase()}...`
              : defaultText.toUpperCase()}
          </text>
        </svg>
      </Inline>
    );
  }

  return (
    <Inline>
      <Image
        {...rest}
        alt={""}
        src={source}
        size={size}
        onError={(event) => {
          BAD_IMAGES[source] = true;
          event.preventDefault();
        }}
      />
    </Inline>
  );
}
