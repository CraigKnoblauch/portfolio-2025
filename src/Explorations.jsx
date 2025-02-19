function Explorations() {

  return (
    <>
        {/* Master flexbox container for the entire page. Gives column flex box with one column. That column has a max width */}
        <div className="flex flex-col items-center min-h-screen w-full"> 
            <div className="justify-left w-8/10">
                {/* Link home */}
                <a href="/" className="text-secondary-gray merriweather-regular-italic underline text-sm">home</a>
                {/* Header */}
                <h1 className="text-primary-white merriweather-bold text-lg pt-4">Explorations</h1>

                <hr className="border-secondary-gray opacity-50 border-1"/>

                {/* Begin container for a year of posts */}
                <div className="flex justify-between space-y-2 p-2 merriweather-regular text-sm pb-8">
                    {/* First column holds year and will only ever hold year */}
                    <div className="text-secondary-gray">2025</div>
                    {/* Second column a flex col box for each row, each row holds a standard flex box for content */}
                    <div className="flex flex-col min-w-1/2 max-w-3/4 space-y-2">
                        <div className="flex justify-between">
                            <a href="www.youtube.com" className="text-primary-white">Lessons from a 3D portfolio</a>
                            <p className="text-secondary-gray">Feb. 17</p>
                        </div>
                        <div className="flex justify-between">
                            <a href="www.youtube.com" className="text-primary-white">Camera Animations</a>
                            <p className="text-secondary-gray">Jan. 27</p>
                        </div>
                    </div>

                </div>


                {/* Below is exact repeat with different content for demo purposes only */}
                <hr className="border-secondary-gray opacity-50 border-1"/>

                {/* Begin container for a year of posts */}
                <div className="flex justify-between space-y-2 p-2 merriweather-regular text-sm pb-8">
                    {/* First column holds year and will only ever hold year */}
                    <div className="text-secondary-gray">2024</div>
                    {/* Second column a flex col box for each row, each row holds a standard flex box for content */}
                    <div className="flex flex-col min-w-1/2 max-w-3/4 space-y-2">
                        <div className="flex justify-between">
                            <a href="www.youtube.com" className="text-primary-white">Releasing a beta</a>
                            <p className="text-secondary-gray">Jun. 9</p>
                        </div>
                        <div className="flex justify-between">
                            <a href="www.youtube.com" className="text-primary-white">Rocket Launch</a>
                            <p className="text-secondary-gray">May 27</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Explorations
