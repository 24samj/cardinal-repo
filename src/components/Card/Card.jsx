import "./Card.css";

const Card = ({
    height,
    width,
    backgroundColor,
    border,
    borderRadius,
    boxShadowX,
    boxShadowY,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowColor,
    boxShadowType,
    contentPadding,
    contentColor,
}) => {
    return (
        <div
            className="card-preview"
            style={{
                height: height,
                width: width,
                ...(backgroundColor && { backgroundColor: backgroundColor }),
                border: border,
                ...(borderRadius && { borderRadius: borderRadius + "px" }),
                ...((boxShadowX ||
                    boxShadowY ||
                    boxShadowBlur ||
                    boxShadowSpread) && {
                    boxShadow:
                        boxShadowX +
                        "px " +
                        boxShadowY +
                        "px " +
                        boxShadowBlur +
                        "px " +
                        boxShadowSpread +
                        "px " +
                        boxShadowColor +
                        " " +
                        boxShadowType,
                }),
                ...(contentPadding && { padding: contentPadding + "px" }),
                color: contentColor,
            }}>
            Card content.
        </div>
    );
};

export default Card;
