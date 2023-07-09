import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H2, H3, H6, Description } from 'components/Text'

const Percentage = styled.p`
  margin: 0;
  font-size: 16px;
  color: #7a7a7a;
  font-family: sans-serif;
  margin-top: 10px;
`

const Flavours = ({ src, color, ...rest }) => (
  <Flex width="100%" style={{ margin: `0PX 85px` }} height="570px" {...rest}>
    <Flex width="50%" justifyContent="center" alignItems="center">
      <img decoding="async" width="358" height="467" src={src} />
    </Flex>
    <Flex
      width="50%"
      style={{ backgroundColor: '#2b2b2b0f', padding: '70px' }}
      flexDirection="column"
    >
      <H6 style={{ marginBottom: '20px' }}>Biergut</H6>
      <H3
        style={{
          color,
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        Premium Light
      </H3>
      <Description style={{ marginBottom: '20px' }}>
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec
        sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
      </Description>
      <Flex style={{ marginTop: '40px' }}>
        <Flex width="50%" flexDirection="column">
          <H6>EXTRACT</H6>
          <Percentage>11%</Percentage>
        </Flex>
        <Flex width="50%" flexDirection="column">
          <H6>ALCOHOL</H6>
          <Percentage>4%</Percentage>
        </Flex>
      </Flex>
      <Flex style={{ marginTop: '30px' }}>
        <Flex width="50%" flexDirection="column">
          <H6>GENTAIN</H6>
          <Percentage>20IBU</Percentage>
        </Flex>
        <Flex width="50%" flexDirection="column">
          <H6>Serving Temp</H6>
          <Percentage>6-9 Degree Celsius</Percentage>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)

const NewFlavours = () => (
  <>
    <Section>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexDirection="column"
      >
        <H2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Discover Our <br />
          New Flavors
        </H2>
        <Description
          style={{
            textAlign: 'center',
            fontSize: '25px',
            marginBottom: '20px',
          }}
        >
          Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
          Donec <br />
          sollici tudin molestie malesuada.
        </Description>
      </Flex>
    </Section>
    <Section marginTop="-100px" paddingBottom="0px">
      <Flavours
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-light-1.png"
        color="#f3c242"
      />
    </Section>
    <Section marginTop="-100px">
      <Flavours
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-dark-1.png"
        color="#3a3a3a"
        flexDirection="row-reverse"
      />
    </Section>
  </>
)

export default NewFlavours
