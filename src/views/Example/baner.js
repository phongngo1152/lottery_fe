import React from 'react';
import './baner.scss'

class Banner extends React.Component {
    render() {
        return (
            <>

                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12 text-center">
                                <h1 className="a1">Lottery</h1>
                                <img src="https://st3.depositphotos.com/3645435/12570/v/950/depositphotos_125706790-stock-illustration-lottery-realistic-banner.jpg" width="100%" height="" class="img-responsive" alt="Image" />
                                <p class="lead">A great starter layout for a landing page</p>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <section >
                    <div className="container">
                        <h2 className="fw-light">Page Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis
                            blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat
                            reprehenderit expedita.</p>
                    </div>
                </section> */}
            </>
        )
    }
}
export default Banner;