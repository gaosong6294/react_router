import React, {Component} from 'react';

export default class Repo extends Component{
  render(){
    const {name, repo} = this.props.params;
    return <p>用户名: {name}, 仓库名: {repo}</p>
  }
}