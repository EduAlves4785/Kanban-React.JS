/* eslint-disable react/prop-types */
import { useEffect,useState } from 'react'
import {Container} from './styles'

export const List = ({Nome}) => {

  const[tarefas,setTarefas]=useState([])
  const[test,setTeste]=useState()
  const url="http://localhost:3000/tarefas"

  useEffect(()=>{
    fetch(url)
    .then(async response=>{
        const resp=await response.json()
        if(Nome=="Fazer")setTeste("fazer")
        if(Nome=="Fazendo")setTeste("fazendo")
        if(Nome=="Feito")setTeste("feito")
        const TarefasFazer = resp.filter(task => task.status === `${test}`);
        setTarefas(TarefasFazer)
    })
  })

  return (
    <Container>
        <h1>{Nome}</h1>
        {tarefas.map((item)=><div key={item.id}>
            <h3>{item.nome}</h3>
            <p>Prioridade: {item.prioridade=="media"?"Média":item.prioridade}</p>
            <button onClick={()=>{
              let status=" "
              if(item.status=="fazendo"){
                status="fazer"
              }
              if(item.status=="feito"){
                status="fazendo"
              }
              fetch(url+`/${item.id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  nome:item.nome,
                  prioridade:item.prioridade,
                  status:status
                })
              })
            }} style={{display:item.status=="fazer"?"none":""}}>Voltar</button>
            <button onClick={()=>{
              let status=" "
              if(item.status=="fazer"){
                status="fazendo"
              }
              if(item.status=="fazendo"){
                status="feito"
              }

              if(item.status=="feito"){
                fetch(url+`/${item.id}`,{
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' }
                })
              }

              fetch(url+`/${item.id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  nome:item.nome,
                  prioridade:item.prioridade,
                  status:status
                })
              })
            }}>{Nome=="Feito"?"Concluir":"Avançar"}</button>
        </div>)}
    </Container>
  )
}
