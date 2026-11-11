# Team Sviluppo

Sei specialisti installabili dallo store lavorano insieme nella conversazione di gruppo di Talia. Il Commander della conversazione coordina le assegnazioni e raccoglie i risultati.

| Ruolo | Agente nello store | Responsabilità |
| --- | --- | --- |
| Architettura | App-Architetto | Struttura tecnica, modelli dati, contratti API e decisioni motivate |
| UI/UX | UIDesigner | Flussi, gerarchia visiva, accessibilità, design system e prototipi |
| Frontend | App-Frontend | Componenti, stato, integrazione API e interfaccia responsive |
| Backend | App-Backend | API, logica di business, dati, integrazioni e test |
| DevOps | App-DevOps | Ambienti, configurazione, CI/CD, deployment e operatività |
| Test | App-E2E-Tester | Scenari end-to-end, regressioni, report e verifica dei percorsi utente |

## Configurazione in Talia

1. Aprire lo store e installare i sei agenti. UIDesigner può essere già installato.
2. Creare una conversazione di gruppo e aggiungere gli specialisti al roster.
3. Usare il nome Team Sviluppo per riconoscere la conversazione.
4. Scegliere il modello della conversazione e comunicare obiettivo, repository, risultato atteso e vincoli.
5. Affidare al Commander il coordinamento e usare il destinatario della chat per richieste dirette a uno specialista.

La distribuzione corrente comprende agenti separati. La configurazione del gruppo si esegue nella conversazione. Un pacchetto team con installazione e roster automatici richiede un’estensione del formato dello store.

## Sequenza di lavoro

- Il Commander definisce il risultato atteso con l’utente e assegna attività proporzionate al lavoro.
- App-Architetto chiarisce le decisioni trasversali e i contratti che servono per procedere.
- UIDesigner prepara flussi e componenti per le parti visibili, con riferimenti e stati d’interazione verificabili.
- App-Backend e App-Frontend implementano sui contratti condivisi. Ogni consegna indica file coinvolti, comportamento e verifiche.
- App-DevOps prepara l’ambiente e i passaggi di distribuzione pertinenti al progetto.
- App-E2E-Tester verifica i percorsi concordati e riferisce risultati osservati e problemi riproducibili.
- Il Commander integra le consegne e distingue implementazione, test locali, prove sul servizio reale e distribuzione.

Per un piccolo intervento il Commander seleziona i ruoli necessari. Il lavoro parallelo richiede responsabilità chiare sui file e sui moduli condivisi. La verifica sul progetto effettivo dipende dagli strumenti, dal modello e dagli accessi configurati nell’host.

## Identificativi dei pacchetti

- talia-agents/app-architetto
- talia-agents/uidesigner
- talia-agents/app-frontend
- talia-agents/app-backend
- talia-agents/app-devops
- talia-agents/app-e2e-tester
