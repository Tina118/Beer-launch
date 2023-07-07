import styled from 'styled-components'
import { Flex } from 'rebass'

const Head = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 100px 0px;
  background-color: #f3c242;
`

const Title = styled.h5`
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 1.2em;
  color: #3a3a3a;
  margin: 0px;
`

const Description = styled.h1`
  font-weight: 400;
  font-size: 4.6875rem;
  line-height: 1.2em;
  color: #3a3a3a;
  margin: 0;
`

const Info = styled.div`
  padding: 0;
  font-weight: 500;
  font-size: 22px;
  color: #54595f;
  font-style: normal;
  line-height: 30px;
  word-wrap: break-word;
  font-family: 'Agdasima', sans-serif;
`

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
  <>
    <Head>
      <Flex
        style={{
          maxWidth: '1300px',
          marginRight: 'auto',
          marginLeft: 'auto',
          position: 'relative',
        }}
      >
        <Flex style={{ width: '50%', position: 'relative' }} flexWrap="wrap">
          <Title>Biergut Premium Beer</Title>
          <Description>Introducing New Premium Flavors</Description>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Info>
          <Flex>
            <Button style={{ background: 'black', color: 'white' }}>
              Host a Party
            </Button>
            <Button>Restock your pub</Button>
          </Flex>
        </Flex>
        <Flex style={{ width: '50%', position: 'relative' }} flexWrap="wrap" justifyContent='flex-end' alignItems="flex-end">
            <img
              decoding="async"
              width="450"
              height="575"
              src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/hero-beer-bottles-3.png"
            />
        </Flex>
      </Flex>
    </Head>
  </>
)

export default Header
