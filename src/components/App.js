import React from 'react';
import NavLink from './NavLink';

export default function App(props){
  return(
    <div>
      <h1>Hello, React Router!</h1>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/repos">Repos</NavLink>
        </li>
      </ul>
      {/*显示当前路由组件*/}
      {props.children}
    </div>
  )
}