interface IconProps {
    className?: string
}

export function RandomPathIcon( { className }: IconProps): JSX.Element {
    // This path is kind of a bezier curve that goes on the back of the hero image to make it look cool in the shape of a stain
    return (
        <svg
            className={className}
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                fillOpacity="1"
                d="M528 501.5C513.333 427.833 421.3 253.2 170.5 144L150 613.5L412.5 668L528 501.5Z"
            />
        </svg>
    )
}

