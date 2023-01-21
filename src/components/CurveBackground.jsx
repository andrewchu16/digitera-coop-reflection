function CurveBackground({ className = "fill-blue-400" }) {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden [line-height:0] animate-slide-down">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-[164%] h-[40%] hover:w-[200%] hover:h-[60%] transition-[width,height] bg-transparent"
            >
                <path
                    d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
                    className={className}
                ></path>
            </svg>
        </div>
    );
}

export default CurveBackground;
