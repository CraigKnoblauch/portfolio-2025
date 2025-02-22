import React, { Suspense } from 'react';

const Markdown = ({ filename }) => {
    
    const Content = React.lazy(() => import(`./mdx/${filename}`));

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