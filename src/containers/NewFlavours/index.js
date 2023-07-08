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

const FlavourName = styled.h6`
  line-height: 1.25rem;
  margin: 0;
  color: #3a3a3a;
  font-size: 1.125rem;
  font-weight: 400;
`

const Flavours = styled.h3`
  color: #f3c242;
  text-transform: 'uppercase';
  line-height: 1.2em;
  margin: 0;
  font-size: 2.875rem;
  font-weight: 400;
  margin-bottom: 20px;
`

const Percentage = styled.p`
  margin: 0;
  font-size: 16px;
  color: #7a7a7a;
  font-family: sans-serif;
  margin-top: 10px;
`

const NewFlavours = () => (
  <>
    <Section>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexDirection="column"
      >
        <FlavoursHeader>
          Discover Our <br />
          New Flavors
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
        <Flex width="50%" justifyContent="center" alignItems="center">
          <img
            decoding="async"
            width="358"
            height="467"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-light-1.png"
          />
        </Flex>
        <Flex
          width="50%"
          style={{ backgroundColor: '#2b2b2b0f', padding: '70px' }}
          flexDirection="column"
        >
          <FlavourName style={{ marginBottom: '20px' }}>Biergut</FlavourName>
          <Flavours>Premium Light</Flavours>
          <Description style={{ fontSize: '22px' }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Donec sollicitudin molestie
            malesuada.
          </Description>
          <Flex style={{ marginTop: '40px' }}>
            <Flex width="50%" flexDirection="column">
              <FlavourName>EXTRACT</FlavourName>
              <Percentage>11%</Percentage>
            </Flex>
            <Flex width="50%" flexDirection="column">
              <FlavourName>ALCOHOL</FlavourName>
              <Percentage>4%</Percentage>
            </Flex>
          </Flex>
          <Flex style={{ marginTop: '30px' }}>
            <Flex width="50%" flexDirection="column">
              <FlavourName>GENTAIN</FlavourName>
              <Percentage>20IBU</Percentage>
            </Flex>
            <Flex width="50%" flexDirection="column">
              <FlavourName>Serving Temp</FlavourName>
              <Percentage>6-9 Degree Celsius</Percentage>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
    <Section marginTop="-100px">
      <Flex
        width="100%"
        style={{ margin: `0PX 85px` }}
        height="570px"
        flexDirection="row-reverse"
      >
        <Flex width="50%" justifyContent="center" alignItems="center">
          <img
            decoding="async"
            width="358"
            height="467"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-dark-1.png"
          />
        </Flex>
        <Flex
          width="50%"
          style={{ backgroundColor: '#2b2b2b0f', padding: '70px' }}
          flexDirection="column"
        >
          <FlavourName style={{ marginBottom: '20px' }}>Biergut</FlavourName>
          <Flavours style={{ color: '#3a3a3a' }}>Premium Light</Flavours>
          <Description style={{ fontSize: '22px' }}>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Donec sollicitudin molestie
            malesuada.
          </Description>
          <Flex style={{ marginTop: '40px' }}>
            <Flex width="50%" flexDirection="column">
              <FlavourName>EXTRACT</FlavourName>
              <Percentage>11%</Percentage>
            </Flex>
            <Flex width="50%" flexDirection="column">
              <FlavourName>ALCOHOL</FlavourName>
              <Percentage>4%</Percentage>
            </Flex>
          </Flex>
          <Flex style={{ marginTop: '30px' }}>
            <Flex width="50%" flexDirection="column">
              <FlavourName>GENTAIN</FlavourName>
              <Percentage>20IBU</Percentage>
            </Flex>
            <Flex width="50%" flexDirection="column">
              <FlavourName>Serving Temp</FlavourName>
              <Percentage>6-9 Degree Celsius</Percentage>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  </>
)

export default NewFlavours
