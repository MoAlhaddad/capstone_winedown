import { Switch, Route } from 'react-router-dom';
import Signup from './containers/Signup';
import WineList from './containers/WineList';
import RandomWineList from './containers/RandomWineList';
import Survey from './components/Q/A/survey';


export default (
    <Switch>
        <Route exact path="/" component={WineList} />
        <Route path="/signup" component={Signup} />
        <Route path="/random-wines" component={RandomWineList} />
        <Route exact path="/survey" component={Survey} />
    </Switch>
);