function Welcome({ onClick }) {
    return (
        <div className="w-screen h-screen flex justify-center items-center popup bg-neutral-100">
            <div className="opacity-0 w-1/2 h-2/5 rounded-3xl flex flex-col gap-6 justify-center items-center">
                <h1 className="text-2xl">My Co-Op Reflection</h1>
                <button
                    className="opacity-0 text-xl py-3 px-5 rounded-2xl bg-sky-500 hover:bg-sky-600 transition-colors"
                    onClick={onClick}
                >
                    Welcome
                </button>
            </div>
        </div>
    );
}

export default Welcome;