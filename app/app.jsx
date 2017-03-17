import { Checklist } from 'components/checklist';

class App extends React.Component {
  render() {
    return (
      <Checklist/>
    );
  }
}; 

ReactDOM.render(<App/>, document.querySelector('#app'));
