module.exports = {
  "packagerConfig": {},
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "forge_webpack_app"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    }
  ],
  "publishers": [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'me',
          name: 'test_electron'
        },
        prerelease: true
      }
    }
  ],
  "plugins": [
    [
      "@electron-forge/plugin-webpack",
      {
        "mainConfig": "./webpack.main.config.js",
        "renderer": {
          "config": "./webpack.renderer.config.js",
          "entryPoints": [
            {
              "html": "./src/pages/overview/overview.html",
              "js": "./src/pages/overview/js/overview.js",
              "name": "overview"
            },
            {
              "html": "./src/pages/addTask/add-task.html",
              "js": "./src/pages/addTask/js/add-task.js",
              "name": "addTask"
            }
          ]
        }
      }
    ]
  ]
}
