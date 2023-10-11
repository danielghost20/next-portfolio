export default function Line() {
    return (
        <svg height="210" width="500">
            <line
                x1="0"
                y1="0"
                x2="200"
                y2="200"
                style={{ WebkitTextStrokeColor: 'rgb(255,0,0)', strokeWidth: 2 }}
            />
        </svg>
    );
}
