export const PostsToc = ({ posts }) => {

    const postsByYear = posts.reduce((acc, post) => {
        const year = new Date(post.date).getFullYear().toString();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {});
    console.log(postsByYear);
    
    const uniqueYears = [...new Set(posts.map(post => new Date(post.date).getFullYear().toString()))]

    /**
     * 
     * BORDER: <hr className="border-secondary-gray opacity-50 border-1"/>
     * 
     * YEAR OF POSTS CONTAINER: <div className="flex justify-between space-y-2 p-2 merriweather-regular text-sm pb-8">
     * 
     * YEAR: <div className="text-secondary-gray">2024</div>
     * 
     * POSTS CONTAINER: <div className="flex flex-col min-w-1/2 max-w-3/4 space-y-2">
     * 
     * POST TITLE/DATE CONTAINER: <div className="flex justify-between">
     * 
     * POST TITLE: <a href="www.youtube.com" className="text-primary-white">Releasing a beta</a>
     * POST DATE: <p className="text-secondary-gray">Jun. 9</p>
     */

    return (
        <>
        {uniqueYears.map((year, index) => {
            return <>
                <hr className="border-secondary-gray opacity-50 border-1"/>
                <div className="flex justify-between space-y-2 p-2 merriweather-regular text-sm pb-8">
                    <div className="text-secondary-gray">{year}</div>
                    <div className="flex flex-col min-w-1/2 max-w-3/4 space-y-2">
                        {postsByYear[year].map((post, postIndex) => {
                            return <div className="flex justify-between">
                                <a href={post.link} className="text-primary-white">{post.title}</a>
                                <p className="text-secondary-gray">{
                                    new Date(post.date).toLocaleDateString('en-US', { 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })
                                }</p>
                            </div>
                        })}
                    </div>
                </div>
            </>
        })}
        </>
    )
}