import React from 'react'
// import { Lottie } from '@crello/react-lottie'
import styled, { keyframes } from 'styled-components'
import IdaMurniLogo from '../../assets/ida_murni_master.png'

const pulse = keyframes`
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  `

const Ida = styled.div`
  margin: 24px;
  width: 50px;
  height: 50px;
  animation: ${pulse} 2s ease-out infinite;
  animation-iteration-count: infinite;
`
const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.fill ? "100vh" : "180px")};
  width: 100%;
`

const LocalLoader = ({ fill }) => {
  return (
    <Wrapper fill={fill}>
      {/* <Lottie
        config={{
          animationData: beeAnimation,
          loop: true,
        }}
        height={fill ? 100 : 84}
        width={fill ? 100 : 84}
      /> */}
      <Ida>
        <img src={IdaMurniLogo} alt="IdaMurni Exchange" width="50px" />
      </Ida>
      
    </Wrapper>
  )
}

export default LocalLoader
