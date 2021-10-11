import React from 'react';
import ViaCep from '../../dist';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cep: '' };

    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  handleChangeCep(evt) {
    this.setState({ cep: evt.target.value })
  }
  handleSuccess(cepData) {
    console.log(cepData);
  }
  render() {
    return (
      <div className="App">
        <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>Carregando...</p>
            }
            if (error) {
              return <p>Deu erro na requisição</p>
            }
            if (data) {
              return <div>
                <p>
                  CEP: {data.cep} <br/>
                  LOGRADOURO: {data.logradouro} <br/>
                  CIDADE: {data.localidade} <br/>
                  UF: {data.uf} <br/>
                </p>
              </div>
            }
            return <div>
              <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
              <button onClick={fetch}>Pesquisar</button>
            </div>
          }}
        </ViaCep>
        <br/>
        <ViaCep cep="01001000" onSuccess={this.handleSuccess}>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>
            }
            if (error) {
              return <p>error</p>
            }
            if (data) {
              return <div>
                <p>
                  CEP: {data.cep} <br/>
                  LOGRADOURO: {data.logradouro} <br/>
                  CIDADE: {data.localidade} <br/>
                  UF: {data.uf} <br/>
                </p>

              </div>
            }
            return <div>
              <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
              <button onClick={fetch}>Pesquisar</button>
            </div>
          }}
        </ViaCep>

        <iframe className="maps-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.487569319064!2d-34.905432685610734!3d-8.051644682658281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e1236c4cc5%3A0xcf30335f63037230!2sUNINASSAU%20-%20Bloco%20A!5e0!3m2!1spt-BR!2sbr!4v1633739155705!5m2!1spt-BR!2sbr%22" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

      </div>
    );
  }
}

export default App;
