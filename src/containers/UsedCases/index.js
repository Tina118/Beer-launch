import styled from 'styled-components'
import { Flex } from 'rebass'

import Crousel from 'components/Crousel'
import Section from 'components/Section'
import { H3 } from 'components/Text'

const Button = styled.button`
  font-family: 'Bungee', cursive;
  width: 350x;
  max-width: 350px;
  padding: 10px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  background-color: #f9b301;

  @media (max-width: 769px) {
    margin: 20px 0px;
  }
`

const UsedCases = () => (
  <>
    <Section paddingTop="0px" paddingBottom="30px">
      <Flex
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        sx={{
          [`@media (max-width: 769px)`]: {
            flexDirection: 'column',
          },
        }}
      >
        <H3 style={{ textTransform: 'uppercase', marginBottom: '0px' }}>
          Biergut
        </H3>
        <Button>Follow us on Instagram</Button>
      </Flex>
    </Section>
    <Crousel />
  </>
)

export default UsedCases
