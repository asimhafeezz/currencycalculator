import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'
import { theme } from '../style'


const { colors } = theme

//root
const Root = styled.View``

const Box = styled.View`
height: 150px;
width: 150px;
background-color: ${colors.text};
border-radius: 30px;
justify-content: center;
align-items: center;
`

const LogoImage = styled.Image`
width: 100px;
height: 100px;
`

const ReverseLogo = () => {
return(
    <Root>
        <Box>
        <LogoImage source={{uri : "https://static.thenounproject.com/png/563195-200.png"}} />
        </Box>
    </Root>
    )
}

export default ReverseLogo