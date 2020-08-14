import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center"
    },
    cabecalho:{
        backgroundColor:'#054C44',
        width: '100%',
        height: 25
    },
    containerCabecalho:{
        backgroundColor: '#075E55',
        width:'100%',
        height: 100
    },
    containerlogo:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15
    },
    logo:{
        color: '#FCFDFD',
        fontSize: 25,
        fontWeight: "bold"
    },
    imgsCabacalho:{
        flexDirection: "row"
    },
    pesquisa:{
        width: 25,
        height: 25,
    },
    tresPontos:{
        width: 25,
        height: 25,
        marginLeft: 15
    }
})