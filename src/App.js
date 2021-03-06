import React from 'react';
import './App.css';
import '../src/css/common.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Switch,Route} from "react-router-dom";
// import Login, {Register}  from "../src/Commponets/Auth/login";
import Invoice  from "../src/Commponets/invoiceList";
import Login  from "../src/Commponets/login";
 import SignUp  from "../src/Commponets/signup";
 import Reset  from "../src/Commponets/reset";
 import DashBoard  from "../src/Commponets/dashBoard";
  import Loop  from "../src/Commponets/common/loop";
  import ReportLoop  from "../src/Commponets/common/reportLoop";

import 'bootstrap/dist/css/bootstrap.min.css';

import ColumnChart  from "../src/Commponets/common/chart";
import DoughnutChart  from "../src/Commponets/common/donutchart";


function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/auth" component = {Login} /> */}
        {/* <Route exact path="/register" component = {Register} /> */}
        <Route exact path="/" component = {Login} />
        <Route exact path="/signup" component = {SignUp} />
        <Route exact path="/invoice" component = {Invoice} />
        <Route exact path="/reset" component = {Reset} />
        <Route exact path="/dashboard" component = {DashBoard} />
        <Route exact path="/loop" component = {Loop} />
        <Route exact path="/report" component = {ReportLoop} />


        <Route exact path="/chart" component = {ColumnChart} />
        <Route exact path="/donut" component = {DoughnutChart} />
      </Switch>
    </div>
  );
}

export default App;
