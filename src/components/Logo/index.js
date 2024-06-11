import logo from '../../logo.png'
import styled from 'styled-components'

const Img = styled.img`
  width: 150px;
  margin-bottom: 30px;
`

const Logo = () => {
  return (
    <Img src={logo}/>
  )
}

export default Logo