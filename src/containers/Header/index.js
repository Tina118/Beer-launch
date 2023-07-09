import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H1, H5, Description } from 'components/Text'

const Button = styled.button`
  font-family: 'Bungee', cursive;
  width: 230px;
  max-width: 230px;
  margin-right: 20px;
  padding: 0px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
`

const Header = () => (
  <Section backgroundColor="#f3c242">
    <Flex style={{ width: '50%', position: 'relative' }} flexWrap="wrap">
      <H5>Biergut Premium Beer</H5>
      <H1>Introducing New Premium Flavors</H1>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </Description>
      <Flex>
        <Button style={{ background: 'black', color: 'white' }}>
          Host a Party
        </Button>
        <Button>Restock your pub</Button>
      </Flex>
    </Flex>
    <Flex
      style={{ width: '50%', position: 'relative' }}
      flexWrap="wrap"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <img
        decoding="async"
        width="450"
        height="575"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/hero-beer-bottles-3.png"
      />
    </Flex>
  </Section>
)

export default Header
