import React from "react";
import '../../assets/css/lottery.scss';

class Header extends React.Component {

    state = {

    }
    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    render() {
        return (
            <>
                <div className="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top topnav">
                        <div class="container">

                            <img src={require('../../assets/images/logo1.png')} width="100" height="50" class="img-responsive" alt="Image" />

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <i class="fa fa-home"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Information</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">History</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a class="nav-link" href="#" >Log In</a>
                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    };
}
export default Header;