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
        height: 120,
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
        position: 'absolute',
        bottom:0
     
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
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 3
    },
    containerPerfil:{
        flexDirection: "column",
        margin: 10
    },
    containerNomePerfil:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    nomePerfil:{
        fontSize:17,
        fontWeight: "bold",
        marginBottom: 2
    },
    containerMensagemPerfil:{
        flexDirection: "row",
        alignItems: "center",
    },
    visto:{
        width: 17,
        height: 17,
        marginRight: 5
    },
    mensagemPerfil:{
        fontSize: 14,
        color: '#6E6E6E'
    },
    containerBorda:{
        marginTop: 20
    },
    borderDivisor:{
        borderTopWidth: 0.5,
        width: 245,
        borderColor: '#A4A4A4',
    }
})