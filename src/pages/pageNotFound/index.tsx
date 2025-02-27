import './pageNotFound.scss'
const PageNotFound = () => {
    return (
        <>
            <div className="bg-black text-white ">
                <div className="flex items-center justify-center min-h-screen px-2">
                    <div className="text-center">
                        <h1 className="text-9xl font-bold">404</h1>
                        <p className="text-2xl font-medium mt-4">Oops! Page not found</p>
                        <p className="mt-4 mb-8">The page you're looking for doesn't exist or has been moved.</p>
                        <a href="/"
                            className="px-6 py-3  bg-gray-700 font-bold font-semibold rounded-full  transition duration-300 ease-in-out  hover:bg-gray-600 text-white">
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
