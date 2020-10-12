import React from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.section`
    background-image:url("/images/image_1.jpg");
`


const SiteHero = () => {
    return (
        <div>
            <BackgroundImage class="site-hero" id="section-home"
                data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row intro-text align-items-center justify-content-center">
                        <div class="col-md-10 text-center pt-5">

                            <h1 class="site-heading site-animate">Nickolaus<strong class="d-block">Lavery</strong>
                            </h1>
                            <strong class="d-block text-white text-uppercase letter-spacing">|| Digital Crafstman ||</strong>

                        </div>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default SiteHero;