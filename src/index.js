import React from 'react'
import {Text, View, Image, ScrollView} from 'react-native'
import Styles from './public/styles/stylesIndex'

export default function Index() {
  return (
    <View style={Styles.container}>
      <View style={Styles.cabecalho}></View>

      <View style={Styles.containerCabecalho}>  
        <View style={Styles.containerlogo}>
          <Text style={Styles.logo}>WhatsApp</Text>
            <View style={Styles.imgsCabacalho}>
              <Image
                style={Styles.pesquisa}
                source={require("./public/images/lupa.png")}
              />
              <Image
                style={Styles.tresPontos}
                source={require("./public/images/tres-pontos.png")}
              />
            </View>   
        </View>

        <View style={Styles.containerNavegacao}>
          <View style={Styles.Navegação}>
            <Image
                style={Styles.camera}
                source={require("./public/images/camera.png")}
              />
              <Text style={Styles.textNav}>CORVERSA</Text>
              <Text style={Styles.textNav}>STATUS</Text>
              <Text style={Styles.textNav}>CHAMADAS</Text>
          </View>  
          
        </View>
      </View>
      
      <ScrollView>
        <View style={Styles.containerConversas}>
       
          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>
          </View>

          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>    
          </View>

          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>    
          </View>

          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>    
          </View>

          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>    
          </View>

          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>    
          </View>

          <View style={Styles.conversas}>
            <Image
              style={Styles.perfil}
              source={require("./public/images/minhaFoto.jpg")}
            />
            
            <View style={Styles.containerPerfil}>
              <View style={Styles.containerNomePerfil}>
                <Text style={Styles.nomePerfil}>Gabriel Felix</Text>
                <Text>10:30</Text>
              </View>
              
              <View style={Styles.containerMensagemPerfil}>
                <Image
                style={Styles.visto}
                source={require("./public/images/visto.png")}
              />
                <Text style={Styles.mensagemPerfil}>Eai cara, como você está?</Text>
              </View>
              <View style={Styles.containerBorda}>
                <Text style={Styles.borderDivisor}></Text>
              </View>
            </View>    
          </View>
        </View>
      </ScrollView>
    </View>
  )
}