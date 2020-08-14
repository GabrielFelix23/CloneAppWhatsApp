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
        height: 120
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
        width: 22,
        height: 22,
    },
    tresPontos:{
        width: 20,
        height: 20,
        marginLeft: 15
    },
    containerNavegacao:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
     
    },
    Navegação:{
        marginTop: 10,
        marginBottom: 15,
        alignItems: "center",
        flexDirection: "row"
    },
    camera:{
        marginRight: 10,
        marginLeft:10,
        width: 27,
        height: 27
    },
    textNav:{
        marginRight: 25,
        marginLeft: 25,
        fontWeight: "bold",
        color: '#FCFDFD'
    },
})