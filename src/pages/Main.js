import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ArtBoard from './ArtBoard';

import First from './First';
import Second from './Second';
import Third from './Third';

import {
    BOARD_1,
    BOARD_2,
    BOARD_3,
  } from './routes';

class Main extends Component {
    render() {
      return (
        <Fragment>
            <Header />
            <section className='main'>
                <div className='main'>
                    <ArtBoard />
                    <div className='main__draggble'>
                        <Switch>
                            <Route
                                exact
                                path={BOARD_1}
                                component={First}
                            />
                            <Route
                                path={BOARD_2}
                                component={Second}
                            />
                            <Route
                                path={BOARD_3}
                                component={Third}
                            />
                        </Switch>
                    </div>
                </div>
            </section>
        </Fragment>
      );
    }
  }
  
  export default Main;