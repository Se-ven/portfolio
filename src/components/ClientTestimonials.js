import React from 'react';
import styled from 'styled-components';

const ClientTestimonials = () => {
    return (
	<section class="site-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-12">
					<div class="section-heading text-center">
						<h2>Client <strong>Testimonials</strong></h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">

					<div class="block-47 d-flex mb-5">
						<div class="block-47-image">
							<img src="images/person_1.jpg" alt="Image placeholder" class="img-fluid"/>
						</div>
						<blockquote class="block-47-quote">
							<p>&ldquo;Nick provided a variety of services for our project, I highly recommend him as an engineer!&rdquo;</p>
							<cite class="block-47-quote-author">&mdash; Human One, CEO <a href="#">Monster's
									Inc.</a></cite>
						</blockquote>
					</div>

				</div>
				<div class="col-md-6">

					<div class="block-47 d-flex mb-5">
						<div class="block-47-image">
							<img src="images/person_2.jpg" alt="Image placeholder" class="img-fluid"/>
						</div>
						<blockquote class="block-47-quote">
							<p>&ldquo;I've known Nick for years, always a unique experience working with him; he seems to bring such a variety of cross-domain 
                                knowledge and a passion to help!&rdquo;</p>
							<cite class="block-47-quote-author">&mdash; Kip Davis, CEO <a href="#">Radio Inc.</a></cite>
						</blockquote>
					</div>

				</div>

				
			</div>
		</div>
	</section>

    )
}

export default ClientTestimonials;