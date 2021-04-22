import { useRef , useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const entrada = useRef()
  const entrada2 = useRef()

  const [numero, setNumero] = useState(null)
  const [n2, setN] = useState(null)
  

  function dolarReal() {
  pesquisaDR(entrada.current.value)
  }

  function pesquisaDR(texto) {
    if(texto===""||isNaN(texto)){
        return false
    }    
    axios.get('https://economia.awesomeapi.com.br/USD-BRL/1').then(
      resposta => setNumero(resposta.data[0].ask*texto)
    )    
  }


  function realDolar() {
    
    //console.log('to funcionando')
    pesquisaRD(entrada2.current.value)
    }

    function pesquisaRD(texto) {
    
      if(texto==="" ||isNaN(texto)){
        return false
      }    
        axios.get('https://economia.awesomeapi.com.br/BRL-USD/1').then(
        resposta => setN(resposta.data[0].ask*texto)
      )
    }
  
  

  return (
    <div className="App">


<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Conversor</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
      </ul>
    </div>
  </nav>

        <div className="container">
        <table className="striped">
        <thead>
          <tr>
              <th>Valor Original</th>
              <th>Transação</th>
              <th>Valor Estimado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><input placeholder="Digite Seus Dólares" type="numb" ClassName="input-field " ref={entrada}  onChange={dolarReal}></input> </td>
            <td>Dolar/Real</td>
            <td>{numero!==null&&(<div><p>R${numero.toFixed(2)}</p></div>)}  </td>
          </tr>
          <tr>
            <td><input type="numb"  placeholder="Digite Seus Reais" ClassName="input-field " ref={entrada2}  onChange={realDolar}></input> </td>
            <td>Real/Dolar</td>
            <td>{n2!==null&&(<div><p>US${n2.toFixed(2)}</p></div>)} </td>
          </tr>
          </tbody>
      </table>


        </div>

      
      
      
    </div>
  );
}

export default App;
