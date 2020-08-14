import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
       flex: 1,
       alignItems: "flex-start"
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
        margin: 15,
        marginTop:20
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
    //Conversas
    containerConversas:{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 15
    },
    conversas:{
        flexDirection: "row"
    },
    perfil:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 3
    },
    containerPerfil:{
        flexDirection: "column",
        margin: 10
    },
    nomePerfil:{
        fontSize:20,
        fontWeight: "bold",
        marginBottom: 2
    },
    mensagemPerfil:{
        fontSize: 15,
        color: '#6E6E6E'
    },
    containerBorda:{
        marginTop: 25
    },
    borderDivisor:{
        borderTopWidth: 0.5,
        width: 245,
        borderColor: '#A4A4A4',
    }
})