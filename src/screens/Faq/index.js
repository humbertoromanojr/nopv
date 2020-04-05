import React from 'react';
import { Link } from 'react-router-dom';

import Accordion from './accordion'
import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import button from '../../assets/images/button.png';

export default function Faq(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Faq</label>
          <p className="description">
            <ul style={{ listStyle: "none" }}>
              <Accordion
                id="1"
                question=" Como funciona o NoPV?"
                answer="O NoPV une quem tem uma demanda, com quem sabe resolver a bronca. Em nossa plataforma temos cadastrados profissionais de diversas áreas."
              />
              <Accordion
                id="2"
                question=" E como funciona?"
                answer="Você chama a gente no Whatsapp e nosso bot vai te direcionando de acordo com suas escolhas."
              />
              <Accordion
                id="3"
                question=" As pessoas prestadoras de serviços são funcionários do NoPV?"
                answer="Não! Os profissionais cadastrados no NoPV são autônomos. Isto é, são profissionais que usam da nossa plataforma para divulgar suas habilidades."
              />
              <Accordion
                id="4"
                question=" Como funciona o pagamento?"
                answer="Você só paga se a solicitação de serviço der certo. O NoPV faz a conexão entre profissionais e clientes interessados. Usamos a plataforma do Pag Seguro para a realização do pagamento."
              />
              <Accordion
                id="5"
                question=" Em qual ferramenta acontece a videoconferência?"
                answer="A videoconferência acontece em ferramenta já existente no perfil do usuário. Por exemplo: hangout do Gmail, messenger do Facebook, Skype ou outra."
              />
              <Accordion
                id="6"
                question=" Como fico sabendo da confirmação da reunião?"
                answer="Você recebe mensagem de texto no Whatsapp com as informações de data e horário selecionadas."
              />
              <Accordion
                id="7"
                question=" Consigo remarcar a reunião?"
                answer="Sim! Desde que a remarcação seja com antecedência prévia de 24h para que não haja taxa devido ao reagendamento."
              />
              <Accordion
                id="8"
                question=" Consigo mudar meu endereço de e-mail?"
                answer="Você pode alterar seu e-mail fazendo uma solicitação para o nosso serviço de suporte."
              />
              <Accordion
                id="9"
                question=" Como a plataforma garante que o profissional é real?"
                answer="No processo de agendamento, o usuário recebe o endereço do LinkedIn do profissional. "
              />
              <Accordion
                id="10"
                question=" Eu me senti/ fui discriminado(a). Como proceder?"
                answer="Lamentamos o ocorrido. Esta não é a experiência que desejamos para quem usa os serviços da plataforma NoPV. Reforçamos a nossa tolerância zero em relação à qualquer tipo de violência, de acordo com nosso Código de Conduta. Se você foi discriminado(a) de alguma forma, notifique imediatamente a autoridade policial. Vamos apurar o ocorrido e aplicar as medidas cabíveis de acordo com nossas políticas e, no caso de investigações, auxiliaremos as autoridades, conforme estabelecido na lei. Informe ao nosso serviço de suporte o que aconteceu, compartilhando detalhes sobre a circunstância. Entraremos em contato em breve."
              />
            </ul>
          </p>
          
        </div>
         
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
            
    </div>
  );
}