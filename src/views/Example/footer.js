import React from 'react';
import './footer.scss'


class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="container footer1">
                        <div className="row">
                            <div className="col l-3 m-6 s-12">
                                <h3 className="footer__title">About</h3>
                                <ul>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Brand</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Community</a></li>
                                    <li><a href="">Litepaper</a></li>
                                </ul>
                            </div>
                            <div className="col l-3 m-6 s-12">
                                <h3 className="footer__title">HELP</h3>
                                <ul>
                                    <li><a href="">Customer support</a></li>
                                    <li><a href="">Troubleshooting</a></li>
                                    <li><a href="">Guides</a></li>
                                </ul>
                            </div>
                            <div className="col l-3 m-6 s-12">
                                <h3 className="footer__title">DEVELOPER</h3>
                                <ul>
                                    <li><a href="">Github</a></li>
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Bug Bounty</a></li>
                                    <li><a href="">Audis</a></li>
                                    <li><a href="">Creers</a></li>
                                </ul>
                            </div>
                            <div className="col l-3 m-6 s-12">
                                <img src="https://www.cryptoninjas.net/wp-content/uploads/pancakeswap-chainlink.jpg " class="img-responsive" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <i class="fa-brands fa-instagram"></i>  
                </div>
                <br></br>
            </>
        )
    }
}

export default Footer;