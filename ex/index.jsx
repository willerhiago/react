import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
<Family lastName ='Santos'>
    <Member name ='Willer'/>
    <Member name ='Thamires'/>
    <Member name ='Igor'/>
</Family>
,document.getElementById('app'))