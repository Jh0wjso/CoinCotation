import React from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";


export default function AllCoinsIndex({ navigation }){
    return(
        <View style ={styles.mainContent}>
            <Text style={styles.textoPrincipal}> ESCOLHA A CRIPTOMOEDA </Text>
            <ScrollView style = {styles.buttonCoinsList}>
                <TouchableOpacity style = {styles.buttonCoin} 
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'DOGE'
                }
                )}
                >
                    <Text style = {styles.buttonText} >
                        Dogecoin
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'SCCPFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Corinthians
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'BICO'
                }
                )}>
                    <Text style = {styles.buttonText}>
                        Biconomy
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'CITYFT'
                }
                )}>
                    <Text style = {styles.buttonText}>
                        Manchester City FC
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'ACMFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        AcMilan
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'FIL'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Filecoin
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'GALFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Galatasaray
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'INTERFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Inter Milan
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'JUVFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Juventus
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'GHST'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Aavegotchi
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'MENGOFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Flamengo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'ASRFT'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        As Roma
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'GNO'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Gnosis
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'FLOW'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Flow
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.buttonCoin}
                onPress ={() => navigation.navigate('CoinValue', 
                {
                    domainName:'ATOM'
                }
                )}
                >
                    <Text style = {styles.buttonText}>
                        Cosmos
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}