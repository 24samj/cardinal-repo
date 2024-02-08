import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Card from "../../components/Card/Card";
import { cssColors } from "../../constants/colorsAndTypes";
import { borderStyles } from "../../constants/colorsAndTypes";

const HomePage = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [previewBackgroundColor, setPreviewBackgroundColor] =
        useState("lavendarblush");
    const [cardHeight, setCardHeight] = useState(300);
    const [cardWidth, setCardWidth] = useState(300);
    const [cardBackgroundColor, setCardBackgroundColor] = useState("");
    const [cardBorderWidth, setCardBorderWidth] = useState(1);
    const [cardBorderType, setCardBorderType] = useState("solid");
    const [cardBorderColor, setCardBorderColor] = useState("black");
    const [cardBorderRadius, setCardBorderRadius] = useState(0);
    const [boxShadowX, setBoxShadowX] = useState(0);
    const [boxShadowY, setBoxShadowY] = useState(0);
    const [boxShadowBlur, setBoxShadowBlur] = useState(0);
    const [boxShadowSpread, setBoxShadowSpread] = useState(0);
    const [boxShadowColor, setBoxShadowColor] = useState("black");
    const [boxShadowType, setBoxShadowType] = useState("");
    const [codeVisible, setCodeVisible] = useState(false);
    const [contentPadding, setContentPadding] = useState(0);
    const [contentColor, setContentColor] = useState("black");

    useEffect(() => {
        setContainerHeight(window.innerHeight * 0.8);
        setContainerWidth(window.innerWidth * 0.4);
        console.log(document.getElementsByClassName("card-preview"));
    }, []);

    return (
        <div className="homepage-container">
            <div
                className="preview-container"
                style={{ backgroundColor: previewBackgroundColor }}>
                <h1 className="container-header">
                    <i>Preview</i>
                </h1>
                <div
                    className="preview-card"
                    style={{ borderRadius: cardBorderRadius + "px" }}>
                    <Card
                        height={cardHeight}
                        width={cardWidth}
                        backgroundColor={cardBackgroundColor}
                        borderWidth={cardBorderWidth}
                        borderType={cardBorderType}
                        borderColor={cardBorderColor}
                        borderRadius={cardBorderRadius}
                        boxShadow={`${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowType}`}
                        contentPadding={contentPadding}
                        contentColor={contentColor}
                    />
                </div>
                <div className="preview-bg-color-container">
                    <select
                        name="colors"
                        id="colors"
                        value={previewBackgroundColor}
                        onChange={(event) => {
                            setPreviewBackgroundColor(event.target.value);
                        }}>
                        {cssColors.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                    <div
                        className="reset-btn"
                        onClick={() => {
                            setPreviewBackgroundColor("lavendarblush");
                        }}>
                        ⭮
                    </div>
                </div>
            </div>
            <div
                className="controls-container"
                style={{
                    justifyContent: codeVisible && "flex-start",
                    paddingTop: codeVisible && "0px",
                }}>
                <h1
                    className="container-header"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "azure",
                    }}>
                    <div
                        className="view-code-btn"
                        onClick={() => {
                            setCodeVisible(!codeVisible);
                        }}>
                        👁
                    </div>
                    <i>Controls</i>
                    <h5 className="reset-btn">⭮</h5>
                </h1>
                {!codeVisible ? (
                    <section className="controllers-section">
                        <div className="basic-controls">
                            <h2 className="controls-section-header">
                                Basic Controls
                            </h2>
                            <div className="controls-row">
                                <div className="card-height-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Card Height
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setCardHeight(300);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{cardHeight}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max={containerHeight}
                                        value={cardHeight}
                                        onChange={(event) => {
                                            setCardHeight(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="card-width-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Card Width
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setCardWidth(300);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{cardWidth}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max={containerWidth}
                                        value={cardWidth}
                                        onChange={(event) => {
                                            setCardWidth(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="card-backgroundColor-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Card Background
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
                                        onChange={(event) => {
                                            setCardBackgroundColor(
                                                event.target.value
                                            );
                                        }}>
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
                        </div>
                        <div className="border-controls">
                            <h2 className="controls-section-header">
                                Border Controls
                            </h2>
                            <div className="controls-row">
                                <div className="card-borderWidth-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Border Width
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setCardBorderWidth(1);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{cardBorderWidth}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={1}
                                        max={
                                            Math.min(cardHeight, cardWidth) / 4
                                        }
                                        value={cardBorderWidth}
                                        onChange={(event) => {
                                            setCardBorderWidth(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="card-borderType-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Border Type
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setCardBorderType("solid");
                                                }}>
                                                ⭮
                                            </div>
                                        </div>
                                    </div>
                                    <select
                                        name="borders"
                                        id="borders"
                                        value={cardBorderType}
                                        onChange={(event) => {
                                            setCardBorderType(
                                                event.target.value
                                            );
                                        }}>
                                        {borderStyles.map((style) => (
                                            <option key={style} value={style}>
                                                {style}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="card-borderColor-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Border Color
                                        </h3>
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
                                        onChange={(event) => {
                                            setCardBorderColor(
                                                event.target.value
                                            );
                                        }}>
                                        {cssColors.map((color) => (
                                            <option key={color} value={color}>
                                                {color}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="card-borderRadius-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Border Radius
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setCardBorderRadius(0);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{cardBorderRadius}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={0}
                                        max={
                                            Math.min(cardHeight, cardWidth) / 2
                                        }
                                        value={cardBorderRadius}
                                        onChange={(event) => {
                                            setCardBorderRadius(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="box-shadow-controls">
                            <h2 className="controls-section-header">
                                Box Shadow Controls
                            </h2>
                            <div className="controls-row">
                                <div className="box-shadow-x-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Box Shadow X
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setBoxShadowX(0);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{boxShadowX}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="-50"
                                        max="50"
                                        value={boxShadowX}
                                        onChange={(event) => {
                                            setBoxShadowX(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="box-shadow-y-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Box Shadow Y
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setBoxShadowY(0);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{boxShadowY}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="-50"
                                        max="50"
                                        value={boxShadowY}
                                        onChange={(event) => {
                                            setBoxShadowY(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="box-shadow-blur-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Box Shadow Blur
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setBoxShadowBlur(0);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{boxShadowBlur}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="50"
                                        value={boxShadowBlur}
                                        onChange={(event) => {
                                            setBoxShadowBlur(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="box-shadow-spread-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Box Shadow Spread
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setBoxShadowSpread(0);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{boxShadowSpread}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="50"
                                        value={boxShadowSpread}
                                        onChange={(event) => {
                                            setBoxShadowSpread(
                                                parseInt(event.target.value)
                                            );
                                        }}
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
                                        onChange={(event) => {
                                            setBoxShadowColor(
                                                event.target.value
                                            );
                                        }}>
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
                                        onChange={(event) => {
                                            setBoxShadowType(
                                                event.target.value
                                            );
                                        }}>
                                        <option key="outset" value="">
                                            Outset
                                        </option>
                                        <option key="inset" value="inset">
                                            Inset
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="content-controls">
                            <h2 className="controls-section-header">
                                Content Controls
                            </h2>
                            <div className="controls-row">
                                <div className="card-contentPadding-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Content Padding
                                        </h3>
                                        <div className="reset-value-container">
                                            <div
                                                className="reset-btn"
                                                onClick={() => {
                                                    setContentPadding(0);
                                                }}>
                                                ⭮
                                            </div>
                                            <i>{contentPadding}</i>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={0}
                                        max={
                                            Math.min(cardHeight, cardWidth) / 8
                                        }
                                        value={contentPadding}
                                        onChange={(event) => {
                                            setContentPadding(
                                                parseInt(event.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="card-contentColor-controller">
                                    <div className="name-reset-container">
                                        <h3 className="control-name">
                                            Content Color
                                        </h3>
                                        <div
                                            className="reset-btn"
                                            onClick={() => {
                                                setContentColor("black");
                                            }}>
                                            ⭮
                                        </div>
                                    </div>
                                    <select
                                        name="colors"
                                        id="colors"
                                        value={contentColor}
                                        onChange={(event) => {
                                            setContentColor(event.target.value);
                                        }}>
                                        {cssColors.map((color) => (
                                            <option key={color} value={color}>
                                                {color}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="code-container">
                        <textarea
                            rows="4"
                            cols="50"
                            type="text"
                            value={`<div className="card">Card content.</div>`}
                        />
                        <textarea
                            type="text"
                            value={`.card {
    height: ${cardHeight}px;
    width: ${cardWidth}px;
    border: ${cardBorderWidth}px ${cardBorderType.toLowerCase()} ${cardBorderColor};
    ${cardBorderRadius ? `border-radius: ${cardBorderRadius}px;` : ""}
    ${
        boxShadowX ||
        boxShadowY ||
        boxShadowBlur ||
        boxShadowSpread ||
        boxShadowType
            ? `box-shadow: ${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowType};`
            : ""
    }
    padding: ${contentPadding}px;
    color: ${contentColor.toLowerCase()};
}`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
