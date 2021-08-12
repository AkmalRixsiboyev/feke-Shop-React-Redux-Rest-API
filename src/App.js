import Header from "./containers/Componets/header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from "./containers/Componets/ProductListing";
import ProductDetail from "./containers/Componets/ProductDetail";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route path={'/'} exact component={ProductListing}/>
                    <Route path={'/product/:productId'} exact component={ProductDetail}/>
                    <Route>404 Not Found! </Route>
                </Switch>
            </Router>


        </div>
    );
}

export default App;
