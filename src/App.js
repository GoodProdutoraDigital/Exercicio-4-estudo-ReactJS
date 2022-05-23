import React from 'react'
import { useState } from 'react';
import {set, useForm} from 'react-hook-form'

import './App.css';

function App() {

  const [cep, setCep] = useState('')
  const [end, setEnd] = useState('')
  const [comp, setComp] = useState('')
  const [bair, setBair] = useState('')
  const [cid, setCid] = useState('')
  const [est, setEst] = useState('')
  const [ddd, setDDD] = useState('')

  const {register, handleSubmit} = useForm()
  
  const buscaCep = async (e) => {
    const res = await fetch('https://viacep.com.br/ws/'+ e.cep +'/json/')
    /* aguarda a reposta e trasforma em json */
    .then((res) => res.json())
    
    console.log(res)
    setCep(res.cep)
    setEnd(res.logradouro)
    setComp(res.complemento)
    setBair(res.bairro)
    setCid(res.localidade)
    setEst(res.uf)
    setDDD(res.ddd)

  }

  return (
    <div className="App">
      <div className='header'>
        <h2>React BuscaCep</h2>
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit(buscaCep)}>
          <div className='form-control'>
            <label htmlFor='cep'>Numero CEP</label>
            <input type='text' {...register('cep')} placeholder='insira o cep'></input>
          </div>
          <div className='form-control'>
            <button type='submit'>Pesquisar</button>
          </div>
        </form>
      </div>
      <div className='result'>
        <p>Cep: {cep}</p>
        <p>Endereço: {end}</p>
        <p>Complemento: {comp}</p>
        <p>Bairro: {bair}</p>
        <p>Cidade: {cid}</p>
        <p>Estado: {est}</p>
        <p>DDD: {ddd}</p>
      </div>
    </div>
  );
}

export default App;