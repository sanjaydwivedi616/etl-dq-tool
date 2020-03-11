import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import product_report from "./ProductReport";
import SummaryReport from "./SummaryReport";
import server_connection from "./ServerConnection";
import help from "./help/Help";
import page_not_pound from "./Page-Not-Found";

function Router() {
  return (
    <div className="App ">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={product_report}></Route>
        <Route path="/SummaryReport" component={SummaryReport}></Route>
        <Route path="/server_connection" component={server_connection}></Route>
        <Route path="/help" component={help}></Route>
        <Route path='*' component={page_not_pound}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default Router;
