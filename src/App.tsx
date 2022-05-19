import React from 'react';
import logo from './logo.svg';
import './App.css';
import {mintV2} from './mint';
import * as web3 from '@solana/web3.js';

function App() {
  const keypair = '';
  const env = "devnet";
  const candyMachine = new web3.PublicKey('GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM')
  const rpcUrl = "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/";

  async function mintNow(){
  const tx = await mintV2(keypair, env, candyMachine, rpcUrl);

  console.log('mint_one_token finished', tx);
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={mintNow}>Mint Now!</button>
      </header>
    </div>
  );
}

export default App;
