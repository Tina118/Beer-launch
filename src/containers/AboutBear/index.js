import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H2, Description } from 'components/Text'

const StyledDesc = styled(Description)`
  font-size: 25px;
  margin-bottom: 20px;

  @media (max-width: 921px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 769px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

const Box = styled.div`
  width: 97%;
  height: 73%;
  background-color: #f3c242;

  @media (max-width: 1025px) {
    width: 95%;
    height: 50%;
  }

  @media (max-width: 977px) {
    width: 95%;
    height: 45%;
  }

  @media (max-width: 958px) {
    width: 95%;
    height: 43%;
  }

  @media (max-width: 935px) {
    width: 95%;
    height: 41%;
  }

  @media (max-width: 921px) {
    width: 95%;
    height: 58%;
  }

  @media (max-width: 868px) {
    width: 95%;
    height: 53%;
  }

  @media (max-width: 852px) {
    width: 95%;
    height: 49%;
  }

  @media (max-width: 826px) {
    width: 95%;
    height: 47%;
  }

  @media (max-width: 801px) {
    width: 95%;
    height: 45%;
  }

  @media (max-width: 784px) {
    width: 95%;
    height: 42%;
  }

  @media (max-width: 769px) {
    display: none;
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;
  height: auto;
  max-width: 100%;
`

const AboutBear = () => (
  <Section backgroundColor="#95959517">
    <Flex
      sx={{
        width: '50%',
        position: 'relative',
        [`@media (max-width: 769px)`]: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      flexWrap="wrap"
    >
      <Image
        width="600"
        height="466"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/brand-history.png"
        alt="bear"
      />
      <Box style={{ position: 'absolute', top: 10, left: 30 }} />
    </Flex>
    <Flex
      sx={{
        width: '50%',
        position: 'relative',
        paddingLeft: '90px',
        [`@media (max-width: 1025px)`]: {
          paddingLeft: '40px',
        },
        [`@media (max-width: 769px)`]: {
          width: '100%',
          marginTop: '70%',
          paddingLeft: 0,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
      flexWrap="wrap"
    >
      <H2 style={{ marginBottom: '20px' }}>
        LEADING BEER BREWERY, <br />
        SINCE 1974!
      </H2>
      <StyledDesc>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
        Mauris blandit aliquet elit, eget tincidunt nibh.
      </StyledDesc>
      <StyledDesc>
        Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Proin eget tortor.
      </StyledDesc>
    </Flex>
  </Section>
)

export default AboutBear
