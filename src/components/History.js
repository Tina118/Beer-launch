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

  @media (max-width: 769px) {
    width: 300px;
    margin-top: 0;
  }
`

const StyledDesc = styled(Description)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  text-align: center;

  @media (max-width: 921px) {
    font-size: 20px;
  }

  @media (max-width: 769px) {
    font-size: 18px;
    margin-top: 10px;
    padding: 0px 10px;
    margin-bottom: 20px;
  }
`

const History = ({ year }) => (
  <Flex flexDirection="column">
    <H4
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      {year}
    </H4>
    <Flex
      sx={{
        [`@media (max-width: 769px)`]: {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Border />
      <FaBeer style={{ paddingLeft: '10px', paddingRight: '10px' }} size="25" />
      <Border />
    </Flex>
    <StyledDesc>
      Quisque velit nisi, pretium ut lacinia in, elementum id enim.
    </StyledDesc>
  </Flex>
)

export default History
