import React from "react";

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "Fly",
      quantity: 0,
      units: 'km'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    if (name === 'itemName') {
      this.handleUnits(value)
    }
  }

  handleSubmit(event) {
    console.log('handle submit')
    this.props.addSelection(this.state.itemName, this.state.quantity)
    event.preventDefault();
  }

  async handleUnits(itemName) {
    let units = await this.getUnits(itemName)
    this.setState({
      'units': units
    })
  }

  getUnits(itemName) {
    return new Promise(resolve => {
      this.props.data.forEach((row) => {
        if (row.name === itemName) {
          resolve(row.unit)
        }
      })
    })
  }

  getOptions() {
    let options = []
    this.props.data.forEach((row) => {
      options.push(<option value={row.name}>{row.name}</option>)
    })
    return options
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item: <select
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleInputChange}>
              {this.getOptions()}
          </select>
        </label> <label>
          <input
              name="quantity"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} 
          /> {this.state.units}
        </label> <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddItemForm