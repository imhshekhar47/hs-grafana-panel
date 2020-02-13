import { PanelPlugin } from "@grafana/data"
import { HSPanelOptions, defaults, HSPanel, HSPanelEditor } from "./component/HSPanel"

export const plugin = new PanelPlugin<HSPanelOptions>(HSPanel)
    .setDefaults(defaults)
    .setEditor(HSPanelEditor)
    