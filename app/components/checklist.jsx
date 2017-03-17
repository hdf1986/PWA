import { CheckItems } from './check_items'

export class Checklist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          content: "test"
        },
        {
          content: "Prueba"
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <CheckItems items={this.state.items}/>
      </div>
    )
  }
}