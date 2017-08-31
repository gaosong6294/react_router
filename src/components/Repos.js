import React, {Component} from 'react';
import NavLink from './NavLink';

export default class Repos extends Component{

  state = {
    repos: [
      {
        username: 'facebook',
        repoName: 'yarn'
      },
      {
        username: 'facebook',
        repoName: 'react'
      },
      {
        username: 'googel',
        repoName: 'angular'
      },
      {
        username: 'ant',
        repoName: 'antd'
      }
    ]
  };

  render(){
    return (
      <div>
        <hr/>
        <h2>Repos组件</h2>
        <ul>
          {
            this.state.repos.map((repo, index) => (
              <li key={index}>
                <NavLink to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</NavLink>
              </li>
            ))
          }
        </ul>
        {this.props.children}
      </div>
    )
  }
}