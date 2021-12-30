import React from 'react';
import styled from 'styled-components';

const SectionResume = () => {
    return (
<section class="site-section " id="section-resume">
		<div class="container">
			<div class="row">
				<div class="col-md-12 mb-5">
					<div class="section-heading text-center">
						<h2>My <strong>Resume</strong></h2>
					</div>
				</div>
				<div class="col-md-6">
					<h2 class="mb-5">Education</h2>
					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> May 2020 - October 2020</span>
						<h3>Full Stack Web Development Certificate</h3>
						<p>Worked together with industry professionals to refresh my skills in full stack web development libraries
                            and technologies.
                        </p>
						<sub>JavaScript, Node.js, React, Express.js, JSON, basic Golang, HTML, CSS, HTTP, Pug Templating. </sub>
						<span class="school">Framingham State University</span>
					</div>

					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> September 2018 - Present</span>
						<h3>Apprenticeship in traditional instrument building</h3>
						<p>Accepted a job as a craftsman at a world renown traditional brass instrument shop.</p>
						<span class="school">S.E. Shires</span>
					</div>

					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> May 2012 - May 2016</span>
						<h3>Pursued BA in Music Education and Low Brass Performance</h3>
						<p>Sought training in classical and jazz music performance and K-12 music education; won numerous national and regional awards as a young musician.</p>
						<span class="school">University of Northern Colorado</span>
					</div>

				</div>
				<div class="col-md-6">


					<h2 class="mb-5">Experience</h2>

					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> September 2018 - Present</span>
						<h3>Assembly Craftsman</h3>
						<p>Building and assembling the myriad instrument components, and buildling custom order trombones.</p>
						<span class="school">S.E. Shires</span>
					</div>

					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> October 2016 - August 2018</span>
						<h3>Chinese Tea Proprieter</h3>
						<p>Educated the public on traditional Chinese teas and tea craft, sold high dollar tea and teaware.</p>
						<span class="school">Ku Cha House of Tea</span>
					</div>

					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> September 2016 - January 2017</span>
						<h3>Quality Control Agent</h3>
						<p>
                            Tested and assesed the quality of returned computers and home theater equipment. 
                            Diagnosed and slated items for repair.
                        </p>
						<span class="school">Geek Squad</span>
					</div>

					<div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> August 2014 - May 2016</span>
						<h3>Field Manager</h3>
						<p>
                            On-site field manager for the Pride of the Rockies Marching Band.
                            Assisted in training incoming students and helping coordinate and manage field performance standards.
                        </p>
						<span class="school">Pride of the Rockies</span>
					</div>

                    <div class="resume-item mb-4">
						<span class="date"><span class="icon-calendar"></span> October 2012 - May 2016</span>
						<h3>Research Library Assistant</h3>
						<p>
                            Librarian's assistant at a specialist music library. Assisted grad students and professors with resource
                            aquisition, library maintenance, (ANSIO) database management, IT support, and patron service.
                        </p>
						<span class="school">Skinner Music Library</span>
					</div>


				</div>
			</div>
		</div>
	</section>
    )
}

export default SectionResume;