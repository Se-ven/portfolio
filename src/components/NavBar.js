import React from 'react';


const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="#section-home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#section-portfolio">Projects</a></li>
                            <li class="nav-item"><a class="nav-link" href="#section-resume">Resume</a></li>
                            <li class="nav-item"><a class="nav-link" href="#section-about">Bio</a></li>
                            <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

