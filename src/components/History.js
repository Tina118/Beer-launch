import styled from 'styled-components'
import { Flex } from 'rebass'
import { FaBeer } from 'react-icons/fa'

import { H4, Description } from 'components/Text'

const Border = styled.div`
  display: flex;
  margin: 0;
  border-top: 1px solid black;
  width: 150px;
  margin-top: 10px;
`

const History = ({ year }) => (
  <Flex flexDirection="column">
    <H4
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '325px',
        marginBottom: '20px',
      }}
    >
      {year}
    </H4>
    <Flex>
      <Border />
      <FaBeer style={{ paddingLeft: '10px', paddingRight: '10px' }} size="25" />
      <Border />
    </Flex>
    <Description
      style={{
        marginTop: '30px',
        width: '230px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `0 45px`,
        textAlign: 'center',
      }}
    >
      Quisque velit nisi, pretium ut lacinia in, elementum id enim.
    </Description>
  </Flex>
)

export default History
