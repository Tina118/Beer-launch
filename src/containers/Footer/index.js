import styled from 'styled-components'
import { Flex } from 'rebass'

const LeftPanel = styled(Flex)`
  background-image: url('https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-party.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  width: 50%;
`

const RightPanel = styled(Flex)`
  background-image: url('https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/bar-restock.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  width: 50%;
`

const Content = styled.div`
  background: black;
  opacity: 0.7;
  width: 100%;
  padding: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1.25em;
  color: #ffffff;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`

const Description = styled.div`
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  font-style: normal;
  line-height: 30px;
  word-wrap: break-word;
  font-family: 'Agdasima', sans-serif;
  margin-top: 30px;
  text-align: center;
`

const Button = styled.button`
  font-family: 'Bungee', cursive;
  max-width: 270px;
  margin-right: 20px;
  padding: 10px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  background-color: #f9b301;
`

const Footer = () => (
  <Flex>
    <LeftPanel>
      <Content>
        <Title>Hosting A Party?</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Description>
        <Button style={{ width: '200px' }}>Get Biergut</Button>
      </Content>
    </LeftPanel>
    <RightPanel>
      <Content>
        <Title>Own a Pub or Bar?</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Description>
        <Button style={{ width: '300px' }}>Contact For Stocking</Button>
      </Content>
    </RightPanel>
  </Flex>
)

export default Footer
