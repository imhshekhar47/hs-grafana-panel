import React, { PureComponent } from "react"
import { PanelEditorProps } from "@grafana/data"
import { FormField } from "@grafana/ui"
import { HSPanelOptions } from "./types"

export class HSPanelEditor extends PureComponent<PanelEditorProps<HSPanelOptions>> {
    onTextChanged = ({ target }: any) => {
        this.props.onOptionsChange({ ...this.props.options, text: target.value });
    }

    render() {
        const { options } = this.props;

        return (
            <div id="hs-panel-editor" className="editor-row">
                <div className="section gf-form-group">
                    <h5 className="section-heading">Display</h5>
                    <div className="gf-form">
                        <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.text || ''} />
                    </div>
                </div>
            </div>

        );
    }
}
