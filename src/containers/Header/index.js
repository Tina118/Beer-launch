import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H1, H5, Description } from 'components/Text'

const Button = styled.button`
  font-family: 'Bungee', cursive;
  height: 50px;
  width: 230px;
  max-width: 230px;
  margin-right: 20px;
  padding: 0px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 1025px) {
    margin-top: 20px;
  }

  @media (max-width: 769px) {
    max-width: 100%;
    width: 100%;
    font-size: 14px;
  }
`

const StyledDesc = styled(Description)`
  @media (max-width: 921px) {
    font-size: 20px;
  }

  @media (max-width: 769px) {
    font-size: 18px;
 `

const Header = () => (
  <Section backgroundColor="#f3c242">
    <Flex
      sx={{
        width: '50%',
        position: 'relative',
        [`@media (max-width: 769px)`]: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      }}
      flexWrap="wrap"
    >
      <H5>Biergut Premium Beer</H5>
      <H1>Introducing New Premium Flavors</H1>
      <StyledDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </StyledDesc>
      <Flex
        sx={{
          [`@media (max-width: 1025px)`]: {
            flexDirection: 'column',
            marginTop: '20px',
          },
          [`@media (max-width: 769px)`]: {
            width: '100%',
          },
        }}
      >
        <Button style={{ background: 'black', color: 'white' }}>
          Host a Party
        </Button>
        <Button>Restock your pub</Button>
      </Flex>
    </Flex>
    <Flex
      sx={{
        width: '50%',
        position: 'relative',
        [`@media (max-width: 769px)`]: {
          width: '100%',
          justifyContent: 'center',
          marginTop: '20px',
        },
      }}
      flexWrap="wrap"
      justifyContent="flex-end"
      alignItems="center"
    >
      <img
        style={{ height: 'auto', maxWidth: '100%' }}
        decoding="async"
        width="450"
        height="575"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/hero-beer-bottles-3.png"
      />
    </Flex>
  </Section>
)

export default Header
