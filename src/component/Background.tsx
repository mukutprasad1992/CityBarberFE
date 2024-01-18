import { ImageBackground, Text, View } from 'react-native'

const Background = ({children}:any) => {
    return (
      <View>
      <ImageBackground source={require("../../public/images/backgroundImage.jpg")} resizeMode='cover'style={{height:"100%"}}>
        <View style={{position:"relative"}}>
            {children}
        </View>
      </ImageBackground>
     
      </View>
    )
  }


export default Background

