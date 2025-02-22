import Sample from './sample.mdx'

function Markdown() {

  return (
    <>
		
        <div className="flex flex-col items-center min-h-screen w-full"> 
        <div className="justify-left w-8/10 lg:w-1/2">
        <div className="prose merriweather-regular">
			<Sample />
		</div>
        </div>
        </div>
    </>
  )
}

export default Markdown
