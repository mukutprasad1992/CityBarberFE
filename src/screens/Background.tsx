import { ImageBackground, Text, View } from 'react-native'

const Background = ({children}:any) => {
    return (
      <View>
      <ImageBackground source={require("../../public/images/barberShopback.jpg")} style={{height:"100%",opacity:0.8}}>
        <View style={{position:"relative"}}>
            {children}
        </View>
      </ImageBackground>
     
      </View>
    )
  }


export default Background

