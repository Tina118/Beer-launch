import styled from 'styled-components'
import { Flex } from 'rebass'

import { H2, Description } from 'components/Text'

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

const Panel = ({ title, description, buttonText, buttonWidth }) => (
  <Content>
    <H2
      style={{
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: '20px',
      }}
    >
      {title}
    </H2>
    <Description
      style={{ color: '#ffffff', marginTop: '30px', textAlign: 'center' }}
    >
      {description}
    </Description>
    <Button style={{ width: buttonWidth }}>{buttonText}</Button>
  </Content>
)

const Footer = () => (
  <Flex>
    <LeftPanel>
      <Panel
        title="Hosting A Party?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis, pulvinar dapibus leo."
        buttonText="Get Biergut"
        buttonWidth='200px'
      />
    </LeftPanel>
    <RightPanel>
      <Panel
        title="Own a Pub or Bar?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis, pulvinar dapibus leo."
        buttonText="Contact For Stocking"
        buttonWidth='300px'
      />
    </RightPanel>
  </Flex>
)

export default Footer
