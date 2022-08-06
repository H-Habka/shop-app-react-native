import {Text, StyleSheet} from 'react-native'

const ExtraBoldText = ({style, children}) => {
    let customStyles = {}

    if(typeof style === "object" && !Array.isArray(style)){
        customStyles = {...style}
    }else if(Array.isArray(style)){
        style.forEach(item => {
            customStyles = {...customStyles, ...item}
        })
    }

  return (
    <Text style={{...customStyles, ...styles.Text}}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    Text : {
        fontFamily : 'tajawal-ExtraBold',
    }
})

export default ExtraBoldText