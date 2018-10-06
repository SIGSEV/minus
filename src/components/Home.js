import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Home extends PureComponent {
  render() {
    return <Container>{'[::]'}</Container>
  }
}

export default Home
