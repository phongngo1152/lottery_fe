import React from 'react';
import './main.scss';


class Main extends React.Component {
    render() {
        return (
            <>
                <div className="main4">
                    <h1>Finished Rounds</h1>
                    <button>All History</button>
                    <div className="container">
                        <div class=" jumbotron main5">
                            <div class="container ">
                                <h5>Round:</h5>
                                <p>Drawn Dec 12, 2022, 7:00 AM</p>
                                <hr></hr>
                                <h4>Winning Number</h4>
                                <p>Contents ...</p>
                                <p>
                                    <a class="btn btn-primary btn-lg">Learn more</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <h1>How to Play</h1>
                    <p>If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.
                        Simple!</p>
                    <div className="row py-5">
                        <div className="col-4" >

                            <div class="jumbotron main3">
                                <div class="container">
                                    <h4>Wait for the Draw</h4>
                                    <p>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-4 ">
                            <div class="jumbotron main3">
                                <div class="container">
                                    <h4>Check for Prizes</h4>
                                    <p>There is one draw every day alternating between 0 AM UTC and 12 PM UTC.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div class="jumbotron main3">
                                <div class="container">
                                    <h4>Buy Tickets!</h4>
                                    <p>Once the round’s over, come back to the page and check to see if you’ve won!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                        <div className="col-md-7">
                            <h2>Winning Criteria</h2>
                            <h5>The digits on your ticket must match in the correct order to win.</h5>
                            <p>Here’s an example lottery draw, with two tickets, A and B.</p>
                            <p>Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.</p>
                            <p>Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.</p>
                            <p>Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.</p>
                        </div>
                        <div className="col-md-5">
                        </div>

                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-7 main1">
                            <h2>Prize Funds</h2>
                            <p>The prizes for each lottery round come from three sources:</p>
                            <h4>Ticket Purchases</h4>
                            <p>100% of the CAKE paid by people buying tickets that round goes back into the prize pools.</p>
                            <h4>Rollover Prizes</h4>
                            <p>After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.</p>
                            <h4>CAKE Injections</h4>
                            <p>An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to CAKE Tokenomics</p>
                        </div>
                        <div className="col-md-5 main2">

                            <img src="https://xuanthulab.net/photo/vong-trong-mau-sac-4492.png" width="100" height="40" class="img-responsive img1" alt="Image" />
                            <div className="col-md-6 ">
                                <h5>DIGITS MATCHED</h5>
                                <p>Matches first 1</p>
                                <p>Matches first 2</p>
                                <p>Matches first 3</p>
                                <p>Matches first 4</p>
                                <p>Matches first 5</p>
                                <p>Matches all 6</p>
                                <p>Burn Pool</p>
                            </div>
                            <div className="col-md-6">
                                <h5>PRIZE POOL ALLOCATION</h5>
                                <p>2%</p>
                                <p>3%</p>
                                <p>5%</p>
                                <p>10%</p>
                                <p>20%</p>
                                <p>40%</p>
                                <p>20%</p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="container"></hr>
                <div className="container py-3 ">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="col-md-6 ">
                                <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60e86ebf56a2bd096bb88698_Pancake-20%20(3).jpg" width="120%" height="" class="img-responsive" alt="Image" />
                            </div>
                            <div className="col-md-6">
                                <b>Still got questions?</b>
                                <p>Check our in-depth guide on how to play the PancakeSwap lottery!</p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

            </>
        )
    }
}
export default Main;