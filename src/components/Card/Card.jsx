import "./Card.css";

const Card = ({
    height,
    width,
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    boxShadow,
}) => {
    return (
        <div
            className="card-preview"
            style={{
                height: height,
                width: width,
                backgroundColor: backgroundColor,
                borderWidth: borderWidth + "px",
                borderColor: borderColor,
                borderRadius: borderRadius + "px",
                boxShadow: boxShadow,
            }}></div>
    );
};

export default Card;
