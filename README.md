# hs-grafana-panel
A panel plugin for grafana

# Setup
[Download](https://grafana.com/grafana/download/) Grafana and unzip to `$GRAFANA_INSTALL_DIR`.
```bash
cd $GRAFANA_INSTALL_DIR
mkdir -p data/plugins 
cd data/plugins
# clone this reppository
git clone http://github.com/hshekhar47/hs-grafana-panel
cd hs-grafana-panel
npm install 
```

# Run
## 1. Plugin dev run
```
cd $GRAFANA_INSTALL_DIR/data/plugin/hs-grafana-panel
npm run watch
```
## 2. Grafana run
```bash
cd $GRAFANA_INSTALL_DIR/bin
./grafana-server
```