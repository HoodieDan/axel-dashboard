interface SemiCircleProgressProps {
    percent: number;
}

const SemiCircleProgress = ({ percent }: SemiCircleProgressProps) => {
    const r = 100; // Radius of the arc
    const centerX = 125; // Center X
    const centerY = 125; // Adjusted to remove bottom space

    const startX = centerX - r; // Leftmost point
    const startY = centerY;

    const endX = centerX + r; // Rightmost point
    const endY = centerY;

    const arc = 180 * percent; // Convert percent to an angle (0 to 180)
    const radianArc = (arc * Math.PI) / 180;

    const progressX = centerX - r * Math.cos(radianArc);
    const progressY = centerY - r * Math.sin(radianArc);

    return (
        <div className="w-full absolute flex justify-center items-center">
            <svg
                width="100%"
                height="auto"
                viewBox="0 0 250 150"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }} // Ensures it stretches fully
            >
                {/* Background Arc */}
                <path
                    d={`M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY}`}
                    stroke="#F2F2F2"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Progress Arc */}
                <path
                    d={`M ${startX} ${startY} A ${r} ${r} 0 0 1 ${progressX} ${progressY}`}
                    stroke="#7387FF"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Moving Thumb */}
                <circle cx={progressX} cy={progressY} r="12" fill="#7387FF" stroke="#fff" strokeWidth="3" />
            </svg>
        </div>
    );
};

export default SemiCircleProgress;
