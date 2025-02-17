import './App.css'

function App() {

  return (
    <>
        {/* Master flexbox container for the entire page. Gives column flex box with one column. That column has a max width */}
        <div className="flex flex-col items-center min-h-screen w-full"> 
            <div className="justify-left w-8/10">
                <h1 className="text-[#efefef]">Craig Knoblauch</h1>
            </div>
        </div>
    </>
  )
}

export default App
