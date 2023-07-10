import { BoxCriar } from '../BoxCriar/index.jsx'
import { List } from '../List/index.jsx';
import {NavBar,Content} from './tarefas.js'
import {useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'

export const Tarefas = () => {

  const[ativo,setAtivo]=useState(true)
  
  return (
    <>
        <NavBar>
            <h1>Kanban-React</h1>
            <button onClick={()=>{
              if(ativo){
                setAtivo(false)
              }else{
                setAtivo(true)
              }
            }}>{ativo?"Criar tarefa":<AiOutlineClose style={{fontSize:"30px"}}/>}</button>
        </NavBar>
        <BoxCriar estilo={ativo}/>
        <Content>
          <List Nome="Fazer"></List>
          <List Nome="Fazendo"></List>
          <List Nome="Feito"></List>
        </Content>
    </>
  )
}
