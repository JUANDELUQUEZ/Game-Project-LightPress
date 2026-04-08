mkdir -p lightpress/client/public
mkdir -p lightpress/client/src/{assets,components,hooks,services}
mkdir -p lightpress/server/src/{config,controllers,models,routes}

touch lightpress/client/src/App.js
touch lightpress/server/src/index.js
touch lightpress/.gitignore
touch lightpress/README.md
touch lightpress/package.json

echo "Estructura estática generada."