import React from 'react';
import styled from 'styled-components';

const SectionServices = () => {
    return (
<section class="site-section pb-0" id="section-services">
		<div class="container">

			<div class="row mb-4">
				<div class="col-md-12">
					<div class="section-heading text-center">
						<h2>Services <strong>Offered</strong></h2>
					</div>
				</div>
			</div>
			<div class="row">

				<div class="col-md-6 col-lg-4 text-center mb-5">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-browser2"></span>
						</span>
						<h3 class="mb-4">React Web Design</h3>
						<p>React front end, templating, website building.</p>
						<p><a href="#" class="site-link">Learn More <i class="icon-chevron-right"></i></a></p>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 text-center mb-5">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-presentation"></span>
						</span>
						<h3 class="mb-4">Backend API and Data Routing</h3>
						<p>Data routing with APIs</p>
						<p><a href="#" class="site-link">Learn More <i class="icon-chevron-right"></i></a></p>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 text-center mb-5">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-video2"></span>
						</span>
						<h3 class="mb-4">Database Creation/Management</h3>
						<p>mysql/MongoDB database management</p>
						<p><a href="#" class="site-link">Learn More <i class="icon-chevron-right"></i></a></p>
					</div>
				</div>
                <div class="col-md-6 col-lg-4 text-center mb-5">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-video2"></span>
						</span>
						<h3 class="mb-4">Artistic/Craft</h3>
						<p>From Chinese gongfu cha/tea ceremonies, to custom brass work, to vintage audio repair; this is per request. Reach out for more discussion here.</p>
						<p><a href="#" class="site-link">Learn More <i class="icon-chevron-right"></i></a></p>
					</div>
				</div>



			</div>
		</div>
	</section>
    )
}

export default SectionServices;