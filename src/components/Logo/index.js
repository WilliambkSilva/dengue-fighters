import logo from '../../logo.png'
import styled from 'styled-components'

const Img = styled.img`
  margin: 10px;
`

const Logo = (props) => {
  return (
    <Img src={logo} style={{width: props.width}}/>
  )
}

export default Logo