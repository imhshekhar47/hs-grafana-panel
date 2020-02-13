import React, { PureComponent } from "react"
import { PanelProps, PanelEditorProps } from "@grafana/data"
import { FormField } from "@grafana/ui"

export interface HSPanelOptions {
    text: string
}

export const defaults: HSPanelOptions = {
    text: "HS Demo Panel"
}

export class HSPanelEditor extends PureComponent<PanelEditorProps<HSPanelOptions>> {
    onTextChanged = ({ target }: any) => {
        this.props.onOptionsChange({...this.props.options, text: target.value });
    }

    render() {
        const { options } = this.props;

        return(
            <div className="section gf-form-group">
                <h5 className="section-heading">Display</h5>
                <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.text || ''} />
            </div>
        );
    }
}

export class HSPanel extends PureComponent<PanelProps<HSPanelOptions>> {
    render() {
        const { options, width, height } = this.props

        console.log(this.props)
        return (
            <div style={{position: "relative", width, height}}>
                <h1>{options.text}</h1>
            </div>
        )
    }
}