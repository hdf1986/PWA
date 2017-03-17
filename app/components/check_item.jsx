export class CheckItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <div>
        {this.state.content}
      </div>
    )
  }
}