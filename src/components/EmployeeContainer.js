/* eslint-disable no-undef */
import Container from "./Container";
import Header from "./Header";
import Table from "./Table";
import search from "../utils/API";
import usertest from "../usertest.json";
import React, {Component} from "react";

class DirectoryContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        results: [],
        filteredResults: []
      };
    }
  
    loadDirectory = () => {
      search()
        .then(res => {
          return res.data.results ? (this.setState({ results: res.data.results })) : (this.setState({ results: usertest }))
        })
    };
  
    componentDidMount() {
      this.loadDirectory();
    }
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      }, () => {
        let latestState = this.state.results;
        let filterList = latestState.filter((item) => {
          var wholeName = item.name.first + item.name.last;
          console.log(this.state.search);
          return wholeName.toLowerCase().includes(this.state.search)
        })
        this.setState({
          filteredResults: filterList
        }, () => {
          console.log(this.state.filteredResults)
        })
      });
  
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
    };
  
    render() {
      return (
        <>
          < Container >
            <Header
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit} />
            <Table
              results={this.state.search ? this.state.filteredResults : this.state.results}
            />
          </Container >
        </>
      );
    }
  }
  export default DirectoryContainer;