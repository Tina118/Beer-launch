import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'

const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1.25em;
  color: #3a3a3a;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
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
      <Title>Choose your Flavour</Title>
      <Description>
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
        rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem.
      </Description>
      <Description>
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
