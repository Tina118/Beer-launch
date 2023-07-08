import styled from 'styled-components'
import { Flex } from 'rebass'

import Crousel from 'components/Crousel'
import Section from 'components/Section'

const Title = styled.h3`
  color: #3a3a3a;
  text-transform: 'uppercase';
  line-height: 1.2em;
  margin: 0;
  font-size: 2.875rem;
  font-weight: 400;
  margin-bottom: 20px;
`

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
        <Title>biergut</Title>
        <Button>Follow us on Instagram</Button>
      </Flex>
    </Section>
    <Crousel />
  </>
)

export default UsedCases
