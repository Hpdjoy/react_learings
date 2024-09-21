//home
import { userContext } from "../Context/Context"
import { View,Text, TextInput } from "react-native"
import { useContext } from "react"

const User = useContext(userContext)

const UserDetails =()=>{

      return(
            <View>
                  <Text>
                        My name is {User.username} and Password is {User.password}
                  </Text>

                  <TextInput onChangeText={User.userPassword(text)}
                  placeholder="password"></TextInput>
                  <TextInput onChangeText={User.userName(text)}
                  placeholder="Name"></TextInput>
            </View>
      )
}

export default UserDetails