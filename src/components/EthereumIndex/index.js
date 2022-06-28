import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function EthereumIndex(){
    
    const [lastCoinSale, setlasCoinSale] = useState();
    const [highCoinSale, setHighCoinSale] = useState();
    const [lowCoinSale, setLowCoinSale] = useState();
    const [volumeCoinSale, setVolumeCoinSale] = useState();


    async function coinInfos(){

        const coinResponse = await fetch("https://www.mercadobitcoin.net/api/ETH/ticker/");
        const coinResponseJson = await coinResponse.json();
        const lastSale = coinResponseJson.ticker.last;
        const highSale = coinResponseJson.ticker.high;
        const lowSale = coinResponseJson.ticker.low;
        const volSale = coinResponseJson.ticker.vol;

        setlasCoinSale(lastSale);
        setHighCoinSale(highSale);
        setLowCoinSale(lowSale);
        setVolumeCoinSale(volSale);
    }

    useEffect(() => {
        coinInfos();
    });

    return(
        <View style={styles.principal}>
            <Text style={styles.textoInicial}>ETHEREUM</Text>
            <View style={styles.infomation}>
                <View style={styles.contentLeft}>
                    <Text style={styles.textoPrincipal}>
                        Ultima Venda/Hoje
                    </Text>
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.valueInfo}>${lastCoinSale}</Text>
                </View>
            </View>

            <View style={styles.infomation}>
                <View style={styles.contentLeft}>
                    <Text style={styles.textoPrincipal}>
                        Maior  Venda/Hoje
                    </Text>
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.valueInfo}>${highCoinSale}</Text>
                </View>
            </View>

            <View style={styles.infomation}>
                <View style={styles.contentLeft}>
                    <Text style={styles.textoPrincipal}>
                        Menor Venda/Hoje 
                    </Text>
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.valueInfo}>${lowCoinSale}</Text>
                </View>
            </View>

            <View style={styles.infomation}>
                <View style={styles.contentLeft}>
                    <Text style={styles.textoPrincipal}>
                        Volume Venda/Hoje 
                    </Text>
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.valueInfo}>${volumeCoinSale}</Text>
                </View>
            </View>
        </View>
    )
}