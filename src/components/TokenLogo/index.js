import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useAllTokensLogo } from '../../contexts/Application'

import { isAddress } from '../../utils/index.js'
import PlaceHolder from '../../assets/placeholder.png'
import EthereumLogo from '../../assets/eth.png'


const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  const tokens = useAllTokensLogo()

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <Image {...rest} alt={''} src={PlaceHolder} size={size} />
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={EthereumLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }
  let token = tokens?.filter((t) => t.address?.toLowerCase() === address?.toLowerCase())
  let path
  if (token.length > 0) {
    token = token[0]
    path = token.logoURI
  } else {
    path = address === '0xccae06ec0787c07d7df5a60856c73a113fc7cf9a' ?
    'https://raw.githubusercontent.com/IdaMurni/website/main/src/assets/img/ida_murni_master.png' :
    `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
      address
    )}/logo.png`
  }

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
