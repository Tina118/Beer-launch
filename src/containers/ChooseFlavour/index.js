import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H2, Description } from 'components/Text'

const Button = styled.button`
  font-family: 'Bungee', cursive;
  width: 270px;
  max-width: 270px;
  margin-right: 20px;
  padding: 10px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  background-color: #f9b301;
`

const ChooseFlavour = () => (
  <Section paddingTop="0px">
    <Flex width="50%">
      <img
        decoding="async"
        width="456"
        height="577"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/choose-flavor.png"
      />
    </Flex>
    <Flex width="50%" flexDirection="column">
      <H2 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>
        Choose your Flavour
      </H2>
      <Description style={{ fontSize: '25px', marginBottom: '20px' }}>
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
        rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem.
      </Description>
      <Description style={{ fontSize: '25px', marginBottom: '20px' }}>
        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
        tincidunt. Cras ultricies ligula sed magna dictum porta. Cras ultricies
        ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.
        Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
        malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
        volutpat.
      </Description>
      <Button>CHOOSE FOR YOURSELF</Button>
    </Flex>
  </Section>
)

export default ChooseFlavour
