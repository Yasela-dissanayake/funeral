import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ChipBox from "../components/ChipBox";
import IconButton from "@mui/material/IconButton";
import Rose from "../assets/icons/rose.svg";
import Candle from "../assets/icons/candle.svg";
import Flowers from "../assets/icons/flowers.svg";
import Ribbon from "../assets/icons/ribbon.svg";

const ReactionsBar = ({ size }) => {
  const initialRoseCount = 10;
  const initialCandleCount = 65;
  const initialFlowerCount = 98;
  const initialRibbonCount = 5;

  const [roseCount, setRoseCount] = useState(initialRoseCount);
  const [candleCount, setCandleCount] = useState(initialCandleCount);
  const [flowerCount, setFlowerCount] = useState(initialFlowerCount);
  const [ribbonCount, setRibbonCount] = useState(initialRibbonCount);

  const handleRoseCount = () => {
    setRoseCount(
      roseCount === initialRoseCount ? roseCount + 1 : initialRoseCount
    );
  };

  const handleCandleCount = () => {
    setCandleCount(
      candleCount === initialCandleCount ? candleCount + 1 : initialCandleCount
    );
  };

  const handleFlowerCount = () => {
    setFlowerCount(
      flowerCount === initialFlowerCount ? flowerCount + 1 : initialFlowerCount
    );
  };

  const handleRibbonCount = () => {
    setRibbonCount(
      ribbonCount === initialRibbonCount ? ribbonCount + 1 : initialRibbonCount
    );
  };

  return (
    <Grid>
      <IconButton aria-label="rose" onClick={handleRoseCount}>
        <ChipBox icon={Rose} count={roseCount} size={size} />
      </IconButton>
      <IconButton aria-label="candle" onClick={handleCandleCount}>
        <ChipBox icon={Candle} count={candleCount} size={size} />
      </IconButton>
      <IconButton aria-label="flowers" onClick={handleFlowerCount}>
        <ChipBox icon={Flowers} count={flowerCount} size={size} />
      </IconButton>
      <IconButton aria-label="ribbon" onClick={handleRibbonCount}>
        <ChipBox icon={Ribbon} count={ribbonCount} size={size} />
      </IconButton>
    </Grid>
  );
};

export default ReactionsBar;
