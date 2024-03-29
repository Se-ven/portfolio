import React from 'react';
import styled from 'styled-components';

const SectionPortfolio = () => {
    return (
        <section class="site-section" id="section-portfolio">
		<div class="container">
			<div class="row">
				<div class="section-heading text-center col-md-12">
					<h2>Featured <strong>Projects</strong></h2>
				</div>
			</div>
			<div class="filters">
				<ul>
					<li class="active" data-filter="*">All</li>
					<li data-filter=".packaging">Websites</li>
					<li data-filter=".mockup">Public Resources</li>
					<li data-filter=".typography">Commerce</li>
					<li data-filter=".photography">Business Admin</li>
				</ul>
			</div>

			<div class="filters-content">
				<div class="row grid">
					<div class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p1.jpg" alt=""></img>
							</div>
							<a href="images/p1.jpg" class="img-pop-up">
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></img>
									</div>
								</div>
							</a>
						</div>
						<div class="p-inner">
							<h4>Square Box Mockup</h4>
							<div class="cat">Mockup</div>
						</div>
					</div>
					<div class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p2.jpg" alt=""></img>
							</div>
							<a href="images/p2.jpg" class="img-pop-up">
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></img>
									</div>
								</div>
							</a>
						</div>
						<div class="p-inner">
							<h4>Product Box Package Mockup</h4>
							<div class="cat">Mockup</div>
						</div>
					</div>
					<div class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p3.jpg" alt=""></img>
							</div>
							<a href="images/p3.jpg" class="img-pop-up">
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></img>
									</div>
								</div>
							</a>

						</div>
						<div class="p-inner">
							<h4>Creative Package Design</h4>
							<div class="cat">Packaging</div>
						</div>
					</div>
					<div class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p4.jpg" alt=""></img>
							</div>
							<a href="images/p4.jpg" class="img-pop-up">
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></img>
									</div>
								</div>
							</a>
						</div>
						<div class="p-inner">
							<h4>Packaging Brand</h4>
							<div class="cat">Packaging</div>
						</div>
					</div>
					<div class="single-portfolio col-sm-4 all typography">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p5.jpg" alt=""></img>
							</div>
							<a href="images/p5.jpg" class="img-pop-up">
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></img>
									</div>
								</div>
							</a>
						</div>
						<div class="p-inner">
							<h4>Isometric 3D Extrusion</h4>
							<div class="cat">Typography</div>
						</div>
					</div>
					<div class="single-portfolio col-sm-4 all photography">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p6.jpg" alt=""></img>
							</div>
							<a href="images/p6.jpg" class="img-pop-up">
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></img>
									</div>
								</div>
							</a>
						</div>
						<div class="p-inner">
							<h4>White Space Photography</h4>
							<div class="cat">photography</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

    export default SectionPortfolio;