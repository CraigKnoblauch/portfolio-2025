// import './App.css'
import { POSTS } from 'src/posts.js'

function App() {

  return (
    <>
        {/* Master flexbox container for the entire page. Gives column flex box with one column. That column has a max width */}
        <div className="flex flex-col items-center min-h-screen w-full"> 
            <div className="justify-left lg:w-1/2 w-8/10">
                {/* Header */}
                <h1 className="text-primary-white merriweather-bold text-lg py-4">Craig Knoblauch</h1>
                <div className="text-primary-white merriweather-regular text-sm space-y-2 py-4">
                    <p>This is a little about who I am</p>
                    <p>This is a little about what I'm doing</p>
                    <p>This is a little about what I've done</p>
                </div>
                {/* Explorations section. Use pattern here to make a component later on */}
				<div className="merriweather-regular text-sm py-4">
					{/* Title */}
					<div className="text-secondary-gray">Explorations</div>
					{/* Container for a post */}
                    {POSTS.filter(post => post.featured).map((post, index) => (
                        <div key={index} className="flex flex-col space-y-2 pt-6">
                            <a href={post.link} className="text-primary-white underline">{post.title}</a>
                            <p className="text-secondary-gray">{post.description}</p>
                        </div>
                    ))}
					<div className="flex flex-col space-y-2 pt-10"> {/* NOTE higher padding on this element for division */}
						<a href="www.youtube.com" className="text-primary-white underline">Everything</a>
					</div>
				</div>
                {/* Experience section. Use pattern here to make a component later on */}
                <div className="flex flex-col space-y-2 merriweather-regular text-sm py-4">
					{/* Title */}
					<div className="text-secondary-gray">Professional Experience</div>
					<p className="text-primary-white">I’ve got experience across a few different industries. A thing about how I’m good at solving problems and always trying to be a better engineer</p>
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
						<p>LinkedIn</p>
						<p>Github</p>
						<p>Mail</p>
					</div>
				</div>
            </div>
        </div>
    </>
  )
}

export default App
