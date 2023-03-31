import { createRoot } from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

// style + assets
import 'assets/scss/style.scss';
import config from './config';

// localstorage
import localDB from 'composable/localDb';
const myDB = new localDB()

// factory of table chapters
let chapters = myDB.all('tdr_lists')
if (chapters === null) {
    myDB.insert('tdr_lists', [])
    /**
     * format table => tdr_lists (output array)
     * [
     *   {
     *      id: 1,
     *      nom; 'TDR 1',
     *      user_id: 1,
     *      chapters: [
     *          {
     *              name: 'Chapitre 1',
     *              subchapter: [
     *                  {
     *                      name: 'Conception',
     *                      type: 'text',
     *                      value: '<p>Hello</p>'
     *                  },
     *                  {
     *                      name: 'Budget',
     *                      type: 'table',
     *                      value: [{"id":1,"designation":"credit","unite":"credit","quantite":1,"pu":10000,"nb_jour":21,"total":210000,"obs":"com"}]
     *                  }
     *              ]
     *          }
     *      ]
     *   }
     * ]
     */
} else {
    console.log(myDB.all('tdr_lists'))
}

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
