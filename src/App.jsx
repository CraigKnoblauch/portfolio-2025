import './App.css'

function App() {

  return (
    <>
        {/* Master flexbox container for the entire page. Gives column flex box with one column. That column has a max width */}
        <div className="flex flex-col items-center min-h-screen w-full"> 
            <div className="justify-left w-8/10">
                <h1 className="text-primary-white merriweather-bold text-lg">Craig Knoblauch</h1>
                <div className="text-primary-white merriweather-regular text-sm space-y-2 pt-6">
                    <p>This is a little about who I am</p>
                    <p>This is a little about what I'm doing</p>
                    <p>This is a little about what I've done</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
