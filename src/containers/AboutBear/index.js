import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'

const Box = styled.div`
  width: 91%;
  height: 96%;
  background-color: #f3c242;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1.25em;
  color: #3a3a3a;
  margin: 0;
  margin-bottom: 20px;
`

const Info = styled.div`
  padding: 0;
  font-weight: 500;
  font-size: 25px;
  color: #54595f;
  font-style: normal;
  line-height: 30px;
  word-wrap: break-word;
  font-family: 'Agdasima', sans-serif;
  margin-bottom: 20px;
`

const AboutBear = () => (
  <Section backgroundColor="#ffffff">
    <Flex style={{ width: '50%', position: 'relative' }} flexWrap="wrap">
      <img
        style={{
          position: 'absolute',
          top: -10,
          left: -15,
          objectFit: 'cover',
          zIndex: 1,
        }}
        decoding="async"
        width="600"
        height="466"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/brand-history.png"
        alt=""
      />
      <Box style={{ position: 'absolute', top: 20, left: 20 }} />
    </Flex>
    <Flex
      style={{ width: '50%', position: 'relative', paddingLeft: '90px' }}
      flexWrap="wrap"
    >
      <Title>
        LEADING BEER BREWERY, <br />
        SINCE 1974!
      </Title>
      <Info>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
        Mauris blandit aliquet elit, eget tincidunt nibh.
      </Info>
      <Info>
        Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Proin eget tortor.
      </Info>
    </Flex>
  </Section>
)

export default AboutBear
