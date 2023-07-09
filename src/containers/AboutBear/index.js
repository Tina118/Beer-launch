import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H2, Description } from 'components/Text'

const Box = styled.div`
  width: 91%;
  height: 96%;
  background-color: #f3c242;
`

const AboutBear = () => (
  <Section backgroundColor="#95959517">
    <Flex style={{ width: '50%', position: 'relative' }} flexWrap="wrap">
      <img
        style={{
          position: 'absolute',
          top: -10,
          left: -15,
          objectFit: 'cover',
          zIndex: 1,
        }}
        width="600"
        height="466"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/brand-history.png"
        alt="bear"
      />
      <Box style={{ position: 'absolute', top: 20, left: 20 }} />
    </Flex>
    <Flex
      style={{ width: '50%', position: 'relative', paddingLeft: '90px' }}
      flexWrap="wrap"
    >
      <H2 style={{ marginBottom: '20px' }}>
        LEADING BEER BREWERY, <br />
        SINCE 1974!
      </H2>
      <Description style={{ fontSize: '25px', marginBottom: '20px' }}>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
        Mauris blandit aliquet elit, eget tincidunt nibh.
      </Description>
      <Description style={{ fontSize: '25px', marginBottom: '20px' }}>
        Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Proin eget tortor.
      </Description>
    </Flex>
  </Section>
)

export default AboutBear
