import "./Card.css";

const Card = ({
    height,
    width,
    backgroundColor,
    borderWidth,
    borderType,
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
                borderStyle: borderType,
                borderColor: borderColor,
                borderRadius: borderRadius + "px",
                boxShadow: boxShadow,
            }}></div>
    );
};

export default Card;
