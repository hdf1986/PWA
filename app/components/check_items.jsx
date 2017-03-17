import { CheckItem} from './check_item'

export class CheckItems extends React.Component {
  render () {

    return (
      <div>
        {this.props.items.map(item => <CheckItem content={item.content}/>)}
      </div>
    )
  }
}