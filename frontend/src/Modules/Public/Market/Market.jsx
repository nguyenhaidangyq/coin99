import React, { Component } from "react";
import { Slider } from "../Shared/Components/Slider/Slider";
import { CoinListMarket } from "./Components/CoinMarket/CoinListMarket";

export class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
            <Slider />
            <CoinListMarket />
            </>
        )
    }
}