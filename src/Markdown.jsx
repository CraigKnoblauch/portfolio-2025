import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'

const Markdown = ({ filename }) => {
    
    let { slug } = useParams();
    const Content = React.lazy(() => import(`./mdx/${slug}.mdx`));

    return (
        <>
            <div className="flex flex-col items-center min-h-screen w-full"> 
                <div className="justify-left w-8/10 lg:w-1/2">
                    <div className="prose merriweather-regular">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Content />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Markdown;