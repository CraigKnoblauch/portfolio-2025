import { Link } from 'react-router-dom'

const Home = ({ posts }) => {

  return (
    <>
        {/* Master flexbox container for the entire page. Gives column flex box with one column. That column has a max width */}
        <div className="flex flex-col items-center min-h-screen w-full"> 
            <div className="justify-left lg:w-1/2 w-8/10">
                {/* Header */}
                <h1 className="text-primary-white merriweather-bold text-lg py-4">Craig Knoblauch</h1>
                <div className="text-primary-white merriweather-regular text-sm space-y-2 py-4">
                    <p>A dedicated practitioner, I am honing my craft of software engineering.</p>
                    <p>In each error, a puzzle. In each bug, an adventure. In each system, a world to explore.</p>
                </div>
                {/* Explorations section. Use pattern here to make a component later on */}
				<div id="explorations" className="merriweather-regular text-sm py-4">
					{/* Title */}
					<div className="text-secondary-gray">Explorations</div>
					{/* Container for a post */}
                    {posts.filter(post => post.featured).map((post, index) => (
                        <div key={index} className="flex flex-col space-y-2 pt-6" data-testid="featured-post">
                            <Link to={`explorations/${post.slug}`} className="text-primary-white underline">{post.title}</Link>
                            <p className="text-secondary-gray">{post.description}</p>
                        </div>
                    ))}
					<div className="flex flex-col space-y-2 pt-10"> {/* NOTE higher padding on this element for division */}
						<Link to="/explorations" className="text-primary-white underline">Everything</Link>
					</div>
				</div>
                {/* Experience section. Use pattern here to make a component later on */}
                <div className="flex flex-col space-y-2 merriweather-regular text-sm py-4">
					{/* Title */}
					<div className="text-secondary-gray">Professional Experience</div>
					<p className="text-primary-white">I am a seasoned software engineer with several years of experience spanning defense research, financial technology, and aerospace. I specialize in sophisticated applications that automate complex processes and significantly improve efficiency. My technical versatility is demonstrated through my work with various programming languages and application stacks, complemented by my ability to independently architect solutions while effectively communicating with stakeholders and coordinating cross-disciplinary teams.</p>
					{/* Small flexbox to hold outbound arrow and link */}
					<div className="flex flex-row text-primary-white">
						<a href="https://drive.google.com/file/d/1q3qX4lHtOwgXbwCQicCOyJ9uc8KG6TYD/view?usp=drivesdk" className="underline">resume</a>
						<svg height="20px" width="20px">
							<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#a3a3a3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>
				</div>
                {/* Contact section. Use pattern here to make a component later on */}
                <div className="flex flex-col space-y-2 merriweather-regular text-sm py-4">
					{/* Title */}
					<div className="text-secondary-gray">Connect</div>
					<div className="flex flex-row space-x-10 text-secondary-gray">
						<a href="https://www.linkedin.com/in/craig-knoblauch-b88563124">LinkedIn</a>
						<a href="https://github.com/CraigKnoblauch">Github</a>
						<a href="mailto:todo@example.com">Mail</a>
					</div>
				</div>
            </div>
        </div>
    </>
  )
}

export default Home
