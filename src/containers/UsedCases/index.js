import styled from 'styled-components'
import { Flex } from 'rebass'

import Crousel from 'components/Crousel'
import Section from 'components/Section'
import { H3 } from 'components/Text'

const Button = styled.button`
  font-family: 'Bungee', cursive;
  width: 350x;
  max-width: 350px;
  margin-right: 20px;
  padding: 10px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  background-color: #f9b301;
`

const UsedCases = () => (
  <>
    <Section paddingTop="0px" paddingBottom="30px">
      <Flex justifyContent="space-between" width="100%">
        <H3 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>
          Biergut
        </H3>
        <Button>Follow us on Instagram</Button>
      </Flex>
    </Section>
    <Crousel />
  </>
)

export default UsedCases
