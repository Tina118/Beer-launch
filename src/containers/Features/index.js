import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'

const FlavoursHeader = styled.h2`
  margin: 0;
  line-height: 1.25em;
  color: #3a3a3a;
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`

const Description = styled.div`
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

const Features = () => (
  <>
    <Section paddingTop="0px">
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexDirection="column"
      >
        <FlavoursHeader>
          Features & <br />
          Ingredients
        </FlavoursHeader>
        <Description style={{ textAlign: 'center' }}>
          Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
          Donec <br />
          sollici tudin molestie malesuada.
        </Description>
      </Flex>
    </Section>
    <Section marginTop="-100px" paddingBottom="0px">
      <Flex width="100%" style={{ margin: `0PX 85px` }} height="570px">
        <Flex width="45%" justifyContent="center" alignItems="center">
          <img
            decoding="async"
            width="350"
            height="554"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-features-1.png"
          />
        </Flex>
        <Flex
          width="55%"
          flexDirection="column"
          style={{ padding: `70px 0px` }}
        >
          <Flex style={{ marginBottom: '40px' }}>
            <img
              style={{ marginRight: '30px' }}
              decoding="async"
              width="66"
              height="66"
              src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-5.png"
            />
            <Description>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada
              feugiat. Mauris blandit aliquet elit
            </Description>
          </Flex>
          <Flex style={{ marginBottom: '40px' }}>
            <img
              style={{ marginRight: '30px' }}
              decoding="async"
              width="66"
              height="66"
              src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-3.png"
            />
            <Description>
              Curabitur aliquet quam id dui posuere blandit. Pellentesque in
              ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui.
            </Description>
          </Flex>
          <Flex style={{ marginBottom: '40px' }}>
            <img
              style={{ marginRight: '30px' }}
              decoding="async"
              width="66"
              height="66"
              src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/iconfinder_Seed_7609583.png"
            />
            <Description>
              Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
              malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus
              suscipit tortor eget felis porttitor volutpat.
            </Description>
          </Flex>
        </Flex>
      </Flex>
    </Section>
    <Section paddingTo="0px">
      <Flex>
        <Flex style={{ padding: `0px 80px` }}>
          <img
            style={{ marginRight: '30px' }}
            decoding="async"
            width="37"
            height="37"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-4.png"
          />
          <Description>
            Vestibulum ac diam sit amet quam vehicula elementum .
          </Description>
        </Flex>
        <Flex style={{ padding: `0px 80px` }}>
          <img
            style={{ marginRight: '30px' }}
            decoding="async"
            width="37"
            height="37"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-2.png"
          />
          <Description>
            Vestibulum ac diam sit amet quam vehicula elementum .
          </Description>
        </Flex>
        <Flex style={{ padding: `0px 80px` }}>
          <img
            style={{ marginRight: '30px' }}
            decoding="async"
            width="37"
            height="37"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-1.png"
          />
          <Description>
            Vestibulum ac diam sit amet quam vehicula elementum .
          </Description>
        </Flex>
      </Flex>
    </Section>
  </>
)

export default Features
