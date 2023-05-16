import { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';

import Casa from '../Casa/index';
import styles from './styles';

export default function Game() {

  const [jogadorAtual, setJogadorAtual] = useState("X");
  const [jogadorX, setJogadorX] = useState(0);
  const [jogadorO, setJogadorO] = useState(0);
  
  const [algorismoX, setAlgorismoX] = useState(0);
  const [algorismoO, setAlgorismoO] = useState(0);

  const [venceuJogo, setVenceuJogo] = useState(false);
  const [empatouJogo, setEmpatouJogo] = useState(false);
 
  
    
    function defineJogadorAtual() {
if (jogadorX  = jogadorO) { setJogadorAtual('X')}; if (jogadorX  > jogadorO){ setJogadorAtual('O')};
        
    }

    function handleEscolheCasa(casa) {
    defineJogadorAtual();

       if (jogadorAtual === "X" ){
        setAlgorismoX = algorismoX + casa;

        if (( (((algorismoX /3)/ 2) =0) && jogadorAtualX >= 3)) {
            setVenceuJogo(true)
        }if (( ((algorismoX /3) = 5) && jogadorAtualX >= 3)) {
            setVenceuJogo(true)
        }} else { setJogadorX(jogadorX + 1)};

        if (jogadorAtual === "O" ){
        setAlgorismoO = algorismoO + casa;
        if (( (((algorismoO /3)/ 2) =0) && jogadorAtualO >= 3)) {
            setVenceuJogo(true)
        }if (( ((algorismoO /3) = 5) && jogadorAtualO >= 3)) {
            setVenceuJogo(true)
        }} else { setJogadorX(jogadorO + 1)};
      };
      

    function handleReiniciarPartida() {
        setJogadorAtual("X");
       setJogadorX(0);
       setJogadorO(0);
        setVenceuJogo(false);
        setEmpatouJogo(false);
        setAlgorismoO(0);
        setAlgorismoX(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogo da Velha</Text>
            <Text style={styles.status}>Jogador da vez: {jogadorAtual}</Text>
            {
                (venceuJogo) ? 
            <View style={styles.areaReinicio}>
                <Text style={styles.status}>Vitória!</Text>
            </View>
            : ""
            }
            {
                (empatouJogo) ? 
            <View style={styles.areaReinicio}>
                <Text style={styles.status}>Empate!</Text>
            </View>
            : ""
            }
            {
                (venceuJogo || empatouJogo) ? 
                <Button title='Reiniciar Partida' onPress={handleReiniciarPartida} />
                :
                ""
            }
            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(1)}>
                        <Casa jogador={posicaoJogo[0]} />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(2)}>
                        <Casa jogador={posicaoJogo[1]} />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(3)}>
                        <Casa jogador={posicaoJogo[2]}/>
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(4)}>
                        <Casa jogador={posicaoJogo[3]} />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(5)}>
                        <Casa jogador={posicaoJogo[4]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(6)}>
                        <Casa jogador={posicaoJogo[5]} />
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(7)}>
                        <Casa jogador={posicaoJogo[6]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(8)}>
                        <Casa jogador={posicaoJogo[7]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(9)}>
                        <Casa jogador={posicaoJogo[8]}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
