<template>
	<div class="logo-wrapper">
		<svg
			class="svg-logo"
			inkscape:version="1.0 (4035a4f, 2020-05-01)"
			sodipodi:docname="twoody-logo2.svg"
			version="1.1"
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:cc="http://creativecommons.org/ns#"
			xmlns:dc="http://purl.org/dc/elements/1.1/"
			xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
			xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
			xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
			xmlns:svg="http://www.w3.org/2000/svg"
			:height="growHeight + 'em'"
			:widht="growWidth + 'em'"
		>
			<defs
				id="defs2"
			>
				<inkscape:perspective
					id="perspective10"
					inkscape:persp3d-origin="105 : -148 : 1"
					inkscape:vp_z="210 : -98.500004 : 1"
					inkscape:vp_y="0 : 999.99996 : 0"
					inkscape:vp_x="0 : -98.500004 : 1"
					sodipodi:type="inkscape:persp3d"
				/>
			</defs>
			<sodipodi:namedview
				id="base"
				inkscape:window-maximized="0"
				inkscape:window-y="23"
				inkscape:window-x="1027"
				inkscape:window-height="1174"
				inkscape:window-width="1252"
				inkscape:snap-bbox="true"
				showgrid="false"
				inkscape:document-rotation="0"
				inkscape:current-layer="layer1"
				inkscape:document-units="mm"
				inkscape:cy="532.67694"
				inkscape:cx="507.46859"
				inkscape:zoom="0.83088408"
				inkscape:pageshadow="2"
				inkscape:pageopacity="0.0"
				borderopacity="1.0"
				bordercolor="#666666"
				pagecolor="#ffffff"
			/>
			<metadata
				id="metadata5"
			>
				<rdf:RDF>
					<cc:Work
						rdf:about=""
					>
						<dc:format>image/svg+xml</dc:format>
						<dc:type
							rdf:resource="http://purl.org/dc/dcmitype/StillImage"
						/>
						<dc:title />
					</cc:Work>
				</rdf:RDF>
			</metadata>
			<g
				id="layer1"
				inkscape:groupmode="layer"
				inkscape:label="Layer 1"
			>
				<g
					id="g7061"
					transform="translate(-49.994439,-83.43021)"
				>
					<path
						id="path1"
						d="M 80.763542,109.63473 75,109.60883 l 0.06442,-6.58502 c 0.03544,-3.621765 0.06443,-8.03374 0.06443,-9.80442 V 90 l 2.383089,2.38382 c 1.310698,1.31111 5.703182,5.74534 9.761076,9.85385 l 7.377986,7.47003 -4.061956,-0.0235 c -2.234078,-0.013 -6.655554,-0.0352 -9.825504,-0.0495 z"
					/>
					<circle
						id="path2"
						cx="69.599998"
						cy="104.189"
						r="4"
					/>
					<circle
						id="path3"
						cy="115.007"
						cx="80.407997"
						r="4"
					/>
					<path
						id="path4"
						d="m 69.214429,109.59983 5.785571,0.009 -0.09975,6.58518 c 0,3.62185 0,8.03389 0,9.80456 v 3.21937 l -2.39403,-2.37684 c -1.296766,-1.30728 -5.68582,-5.72866 -9.77562,-9.82532 l -7.381591,-7.44843 4.0898,0.0116 c 2.194527,0.006 6.583581,0.0158 9.77562,0.0208 z"
					/>
					<circle
						id="path5"
						r="4"
						cx="80.407997"
						cy="104.189"
					/>
					<circle
						id="path6"
						cy="115.007"
						cx="69.599998"
						r="4"
					/>
					<path
						id="path7"
						d="M 55.349007,109.56735 75.128849,89.999999"
					/>
					<path
						id="path8"
						d="M 74.900249,129.21794 94.651001,109.7077"
					/>
				</g>
			</g>
		</svg>
	</div>
</template>

<script>
/**
 * Our logo in SVG format!.
 * Able to scale with `props`.
 *
 * @displayName SVGLogo
 */
export default {
	name: "SVGLogo",
	props: 
		{
			/**
			 * Height of button and svg in em;.
			 */
			growHeight:
				{
					default: 20,
					required: false,
					type: Number,
				},
			/**
			 * Width of button and svg in em;.
			 */
			growWidth:
				{
					default: 20,
					required: false,
					type: Number,
				},
		},
}
</script>

<style scoped lang="less">
.logo-wrapper {

	#path1 {
		fill:#280b0b;
		fill-opacity:1;
		stroke-width:0.0971675;
	}
	#path2 {
		fill:#280b0b;
		fill-opacity:1;
		stroke-width:0.211666;
	}
	#path3 {
		fill:#280b0b;
		fill-opacity:1;
		stroke-width:0.211666;
	}
	#path4 {
		fill:#280b0b;
		fill-opacity:1;
		stroke-width:0.0968047;
	}
	#path5 {
		fill:#ffffff;
		fill-opacity:1;
		stroke-width:0.211666;
	}
	#path6 {
		fill:#ffffff;
		fill-opacity:1;
		stroke-width:0.211666;
	}
	#path7 {
		fill:none;
		stroke:#000000;
		stroke-width:0.1;
		stroke-linecap:butt;
		stroke-linejoin:miter;
		stroke-miterlimit:4;
		stroke-dasharray:none;
		stroke-opacity:1
	}
	#path8 {
		fill:none;
		stroke:#000000;
		stroke-width:0.1;
		stroke-linecap:butt;
		stroke-linejoin:miter;
		stroke-miterlimit:4;
		stroke-dasharray:none;
		stroke-opacity:1;
	}
	.svg-logo {
	}
}
</style>

