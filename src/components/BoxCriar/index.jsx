import { useState } from "react"
import { Container } from "./styles"
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/*eslint-disable no-unused-vars*/

export const BoxCriar = ({estilo}) => {

  const url=`http://localhost:3000/tarefas`
  const[nome,setNome]=useState()
  const[prioridade,setPrioridade]=useState()


  const Task={
    nome,
    prioridade
  }

  const enviarDados=async()=>{
    const Tarefa=
      {
        nome:nome,
        prioridade:prioridade,
        status:"fazer"
      }
    fetch(url,{
      method: "POST",
      body: JSON.stringify(Tarefa),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(resp=>resp.json()).catch((e)=>console.log("Houve um erro "+e))
  }

  return (
    <Container style={{display:estilo?"none":"block"}}>
        <h1>Crie uma tarefa</h1>
        <p>Acompanhe seu progresso</p>
        <div>
            <label>Nome da tarefa</label>
            <input placeholder="Digite o nome ta tarefa" type="text" onChange={(event)=>setNome(event.target.value)}/>
        </div>
        <div>
            <label>Prioridade</label>
            <select onChange={(event)=>setPrioridade(event.target.value)}>
                <option value="default">Selecione</option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
        </div>
        <button onClick={()=>enviarDados()}>Criar</button>
    </Container>
  )
}
