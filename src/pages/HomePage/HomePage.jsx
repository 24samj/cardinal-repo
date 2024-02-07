import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Card from "../../components/Card/Card";
import { cssColors } from "../../constants/cssColors";

const HomePage = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [cardHeight, setCardHeight] = useState(300);
    const [cardWidth, setCardWidth] = useState(300);
    const [cardBackgroundColor, setCardBackgroundColor] = useState("");
    const [cardBorderWidth, setCardBorderWidth] = useState(1);
    const [cardBorderColor, setCardBorderColor] = useState("black");
    const [cardBorderRadius, setCardBorderRadius] = useState(0);
    const [boxShadowX, setBoxShadowX] = useState(0);
    const [boxShadowY, setBoxShadowY] = useState(0);
    const [boxShadowBlur, setBoxShadowBlur] = useState(0);
    const [boxShadowSpread, setBoxShadowSpread] = useState(0);
    const [boxShadowColor, setBoxShadowColor] = useState("black");
    const [boxShadowType, setBoxShadowType] = useState("");

    useEffect(() => {
        setContainerHeight(window.innerHeight * 0.8);
        setContainerWidth(window.innerWidth * 0.4);
    }, []);

    const handleHeightChange = (event) => {
        const newHeight = parseInt(event.target.value);
        setCardHeight(newHeight);
    };

    const handleWidthChange = (event) => {
        const newWidth = parseInt(event.target.value);
        setCardWidth(newWidth);
    };

    const handleCardBackgroundColorChange = (event) => {
        setCardBackgroundColor(event.target.value);
    };

    const handleBorderWidthChange = (event) => {
        const newBorderWidth = parseInt(event.target.value);
        setCardBorderWidth(newBorderWidth);
    };

    const handleBorderColorChange = (event) => {
        setCardBorderColor(event.target.value);
    };

    const handleBorderRadiusChange = (event) => {
        setCardBorderRadius(event.target.value);
    };

    const handleBoxShadowXChange = (event) => {
        const newX = parseInt(event.target.value);
        setBoxShadowX(newX);
    };

    const handleBoxShadowYChange = (event) => {
        const newY = parseInt(event.target.value);
        setBoxShadowY(newY);
    };

    const handleBoxShadowBlurChange = (event) => {
        const newBlur = parseInt(event.target.value);
        setBoxShadowBlur(newBlur);
    };

    const handleBoxShadowSpreadChange = (event) => {
        const newSpread = parseInt(event.target.value);
        setBoxShadowSpread(newSpread);
    };

    const handleBoxShadowColorChange = (event) => {
        setBoxShadowColor(event.target.value);
    };

    const handleBoxShadowTypeChange = (event) => {
        setBoxShadowType(event.target.value);
    };

    return (
        <div className="homepage-container">
            <div className="preview-container">
                <h1 className="container-header">Preview</h1>
                <div className="preview-card">
                    <Card
                        height={cardHeight}
                        width={cardWidth}
                        backgroundColor={cardBackgroundColor}
                        borderWidth={cardBorderWidth}
                        borderColor={cardBorderColor}
                        borderRadius={cardBorderRadius}
                        boxShadow={`${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowType}`}
                    />
                </div>
            </div>
            <div className="controls-container">
                <h1 className="container-header">Controls</h1>
                <>
                    <div className="basic-controls">
                        <div className="card-height-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Card Height</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setCardHeight(300);
                                    }}>
                                    ⭮
                                </div>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max={containerHeight}
                                value={cardHeight}
                                onChange={handleHeightChange}
                            />
                        </div>
                        <div className="card-width-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Card Width</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setCardWidth(300);
                                    }}>
                                    ⭮
                                </div>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max={containerWidth}
                                value={cardWidth}
                                onChange={handleWidthChange}
                            />
                        </div>
                        <div className="card-backgroundColor-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">
                                    Card Background Color
                                </h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setCardBackgroundColor("");
                                    }}>
                                    ⭮
                                </div>
                            </div>
                            <select
                                name="colors"
                                id="colors"
                                value={cardBackgroundColor}
                                onChange={handleCardBackgroundColorChange}>
                                <option key="none" value="">
                                    None
                                </option>
                                {cssColors.map((color) => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="border-controls">
                        <div className="card-borderWidth-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Border Width</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setCardBorderWidth(1);
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <input
                                type="range"
                                min={1}
                                max={Math.min(cardHeight, cardWidth) / 4}
                                value={cardBorderWidth}
                                onChange={handleBorderWidthChange}
                            />
                        </div>
                        <div className="card-borderColor-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Border Color</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setCardBorderColor("black");
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <select
                                name="colors"
                                id="colors"
                                value={cardBorderColor}
                                onChange={handleBorderColorChange}>
                                {cssColors.map((color) => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="card-borderRadius-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Border Radius</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setCardBorderRadius(0);
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <input
                                type="range"
                                min={0}
                                max={Math.min(cardHeight, cardWidth) / 2}
                                value={cardBorderRadius}
                                onChange={handleBorderRadiusChange}
                            />
                        </div>
                    </div>
                    <div className="box-shadow-controls">
                        <div className="box-shadow-x-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Box Shadow X</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setBoxShadowX(0);
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <input
                                type="range"
                                min="-50"
                                max="50"
                                value={boxShadowX}
                                onChange={handleBoxShadowXChange}
                            />
                        </div>
                        <div className="box-shadow-y-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">Box Shadow Y</h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setBoxShadowY(0);
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <input
                                type="range"
                                min="-50"
                                max="50"
                                value={boxShadowY}
                                onChange={handleBoxShadowYChange}
                            />
                        </div>
                        <div className="box-shadow-blur-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">
                                    Box Shadow Blur
                                </h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setBoxShadowBlur(0);
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={boxShadowBlur}
                                onChange={handleBoxShadowBlurChange}
                            />
                        </div>
                        <div className="box-shadow-spread-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">
                                    Box Shadow Spread
                                </h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setBoxShadowSpread(0);
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={boxShadowSpread}
                                onChange={handleBoxShadowSpreadChange}
                            />
                        </div>
                        <div className="box-shadow-color-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">
                                    Box Shadow Color
                                </h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setBoxShadowColor("black");
                                    }}>
                                    ⭮
                                </div>
                            </div>

                            <select
                                name="colors"
                                id="colors"
                                value={boxShadowColor}
                                onChange={handleBoxShadowColorChange}>
                                {cssColors.map((color) => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="box-shadow-type-controller">
                            <div className="name-reset-container">
                                <h3 className="control-name">
                                    Box Shadow Type
                                </h3>
                                <div
                                    className="reset-btn"
                                    onClick={() => {
                                        setBoxShadowType("");
                                    }}>
                                    ⭮
                                </div>
                            </div>
                            <select
                                name="shadowType"
                                id="shadowType"
                                value={boxShadowType}
                                onChange={handleBoxShadowTypeChange}>
                                <option key="outset" value="">
                                    Outset
                                </option>
                                <option key="inset" value="inset">
                                    Inset
                                </option>
                            </select>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default HomePage;
