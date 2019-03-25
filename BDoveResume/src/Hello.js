import React from 'react';

function Hello() {
  let n = 2**8;
  return (
    <ul>
      <Student name="matt" email="mcuringa@adelphi.edu" />
      <Student name="aaron" email="hung@adelphi.edu" />
    </ul>
  )
}

function Student(props) {
  return (
    <li>{props.name} {props.email}</li>
  )
}


export default Hello;