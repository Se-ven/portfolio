import React from 'react';
import styled from 'styled-components';

const SectionAbout = () => {
    return (

	<section class="site-section" id="section-about">
		<div class="container">
			<div class="row mb-5 align-items-center">
				<div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					<img src="images/image_2.jpg" alt="Image placeholder" class="img-fluid"></img>
				</div>
				<div class="col-lg-5 pl-lg-5">
					<div class="section-heading">
						<h2>About <strong>Me</strong></h2>
					</div>
					<p class="lead">
                        I'm a creatively oriented builder of things that wants to make a positive impact on the world through tech.
                    </p>
					<p class="mb-5  ">
                        Interested in how different fields interconnect, I enjoy constantly learning and expanding my skills. 
                    </p>

					<p>
						<a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
						<a href="https://docs.google.com/document/d/1HC3vMBambxwE2PAVhv1ja_UOOgL1PNo3qqa1-UGG62w/edit" class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
					</p>
				</div>
			</div>


		</div>
	</section>

    )
}

export default SectionAbout;