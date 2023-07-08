import styled from 'styled-components'
import { Flex } from 'rebass'
import { FaBeer } from 'react-icons/fa'

const Border = styled.div`
  display: flex;
  margin: 0;
  border-top: 1px solid black;
  width: 150px;
  margin-top: 10px;
`

const Year = styled.h4`
  font-size: 2.25rem;
  font-weight: 400;
  color: #3a3a3a;
  width: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0;
  margin-bottom:20px;
`

const Description = styled.div`
  font-weight: 500;
  font-size: 22px;
  color: #54595f;
  font-style: normal;
  line-height: 30px;
  word-wrap: break-word;
  font-family: 'Agdasima', sans-serif;
  margin-top:30px;
  width:230px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 0 45px;
  text-align:center;
`

const History = ({ year }) => (
  <Flex flexDirection="column">
    <Year>{year}</Year>
    <Flex>
      <Border />
      <FaBeer style={{ paddingLeft: '10px', paddingRight: '10px' }} size="25" />
      <Border />
    </Flex>
    <Description>
      Quisque velit nisi, pretium ut lacinia in, elementum id enim.{' '}
    </Description>
  </Flex>
)

export default History
