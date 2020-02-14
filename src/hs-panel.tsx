import React, { PureComponent } from "react"
import { PanelProps } from "@grafana/data"
import { HSPanelOptions } from "./types"

import "./css/hs-style.scss"

export class HSPanel extends PureComponent<PanelProps<HSPanelOptions>> {
    render() {
        const { options, width, height } = this.props

        console.log(this.props)
        return (
            <div id="hs-panel" style={{position: "relative", width, height}}>
                <h1>{options.text}</h1>
            </div>
        )
    }
}