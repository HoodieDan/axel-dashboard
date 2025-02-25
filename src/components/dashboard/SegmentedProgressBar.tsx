interface SegmentedProgressBarProps {
    percent: number;
    color: string;
    divisions: number;
    height: number;
}

const SegmentedProgressBar = ({ percent, color, divisions, height }: SegmentedProgressBarProps) => {
    return (
        <div className="bar flex gap-1">
            {[...Array(divisions)].map((_, index) => {
                const fillPercentage = Math.min(100, Math.max(0, ((percent - index * (100 / divisions)) / (100 / divisions)) * 100));

                return (
                    <div key={index} className={`empty__bar h-${height} rounded-4xl w-full`} style={{ backgroundColor: '#D0D5DD' }}>
                        <div
                            className="bar__fill rounded-4xl h-full transition-all duration-300"
                            style={{ width: `${fillPercentage}%`, backgroundColor: color }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

export default SegmentedProgressBar;
