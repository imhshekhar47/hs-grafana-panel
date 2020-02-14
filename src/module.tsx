import { PanelPlugin } from "@grafana/data"
import { HSPanelOptions, defaults } from "./types" 
import { HSPanel } from "./hs-panel" 
import { HSPanelEditor } from "./hs-panel-editor"

export const plugin = new PanelPlugin<HSPanelOptions>(HSPanel)
    .setDefaults(defaults)
    .setEditor(HSPanelEditor)
