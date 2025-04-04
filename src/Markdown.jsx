import React, { Suspense, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Footer } from 'src/Footer'

const Markdown = ({ posts }) => {
    
    let { slug } = useParams();
    const Content = React.lazy(() => import(`./mdx/${slug}.mdx`));

    const metadata = posts.find(post => post.slug === slug);

    return (
        <>
            <div className="flex flex-col items-center min-h-screen w-full"> 
                <div className="justify-left lg:justify-center w-8/10 lg:w-1/2">
                    <Link to="/explorations" className="text-secondary-gray merriweather-regular-italic underline text-sm">explorations</Link>
                    <h1 className="text-primary-white merriweather-bold text-lg pt-10 py-1">{metadata.title}</h1>
                    <h2 className="text-secondary-gray merriweather-regular text-sm py-1">{
                        new Date(metadata.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })
                    }
                    </h2>
                    <div className="prose lg:max-w-none md:max-w-none w-full merriweather-regular pt-10">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Content />
                        </Suspense>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Markdown;