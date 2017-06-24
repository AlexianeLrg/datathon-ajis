import React, { Component } from 'react';
import Page from './components/Page';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' render={() => (
              <Page title='Bienvenue !' text="Jeune adulte handicapé moteur, vous souhaitez entrer dans la vie professionnelle. Mais vous allez vite découvrir que ce n’est pas un parcours de tout repos. Etes-vous prêt ? " buttons={[
                { text: "Commencer", url: "/Q1" },
              ]}/>
            )}/>/>
            <Route exact path='/Q1' render={() => (
              <Page title='1. Le droit commun' text="hjuhguhgruhgruhguhrugugrhugrhughr" buttons={[
                { text: "dont touch me", url: "/Q2" },
                { text: "bar", url: "/Q2" },
                { text: "dont touch me please i'm just a button don't touch me !!!!", url: "/Q2" },
                { text: "bar", url: "/Q2" },
              ]}/>
            )}/>
            <Route exact path='/Q2' render={() => (
              <Page title= '2. Où m’installer ?' text="Vous avez grandi en région lilloise, dans le Nord. Mais vous avez également de la famille en Bretagne. Votre frère habite en Ile-de-France et votre cousine dans la banlieue de Lyon. Toutes les régions ne présentent pas les mêmes opportunités pour les travailleurs handicapés." buttons={[
                { text: "Je reste dans le Nord", url: "/Q3" },
                { text: "Direction Paris !", url: "/Q3" },
                { text: "Je descends à Lyon", url: "/Q3" },
                { text: "Je préfère la Bretagne", url: "/Q3" },
              ]}/>
            )}/>
            <Route exact path='/Q3' render={() => (
              <Page title='3. Quel secteur ? ' text="Tous les secteurs professionnels n’embauchent pas de la même façon : certains privilégient l’emploi direct de travailleurs handicapés, d’autres sous-traitent. Le choix d’orientation peut donc être crucial pour votre avenir professionnel. Dans quel domaine souhaitez-vous faire vos études et travailler ?" buttons={[
                { text: "Le commerce", url: "/Q4" },
                { text: "L’administration", url: "/Q4" },
                { text: "L’ingénierie", url: "/Q4" },
              ]}/>
            )}/>
            <Route exact path='/Q4' render={() => (
              <Page title='4. Comment me former ? ' text="Il faut maintenant choisir le type d’études que vous allez faire. L’Agephip propose aux jeunes handicapés une aide au contrat d’apprentissage. Souhaitez-vous en bénéficier ?" buttons={[
                { text: "Oui, je veux étudier en apprentissage", url: "/Q5-1" },
                { text: "Non, je souhaite poursuivre d’autres études", url: "/Q5-2" },
                { text: "Non, je ne veux pas faire d’études", url: "/Q5-2" },
              ]}/>
            )}/>
            <Route exact path='/Q5-1' render={() => (
              <Page title='5. L’insertion' text="Votre contrat d’apprentissage vient de se terminer et vous voilà diplômé. Félicitations ! Votre patron propose de vous embaucher. Il peut toucher pour cela une aide à la pérennisation des contrats en alternance. Souhaitez-vous saisir cette opportunité ?" buttons={[
                { text: "Oui, je veux continuer dans la même entreprise", url: "/Q" },
                { text: "Non, j’ai envie de créer ma propre entreprise !", url: "/Q" },
              ]}/>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
