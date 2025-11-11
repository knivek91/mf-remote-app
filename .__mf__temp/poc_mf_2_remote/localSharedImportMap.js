
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "vue": async () => {
          let pkg = await import("__mf__virtual/poc_mf_2_remote__prebuild__vue__prebuild__.js");
            return pkg;
        }
      ,
        "vuetify": async () => {
          let pkg = await import("__mf__virtual/poc_mf_2_remote__prebuild__vuetify__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "vue": {
            name: "vue",
            version: "3.5.24",
            scope: ["default"],
            loaded: false,
            from: "poc-remote",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"vue"}' must be provided by host`);
              }
              usedShared["vue"].loaded = true
              const {"vue": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.5.24",
              
            }
          }
        ,
          "vuetify": {
            name: "vuetify",
            version: "3.10.10",
            scope: ["default"],
            loaded: false,
            from: "poc-remote",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"vuetify"}' must be provided by host`);
              }
              usedShared["vuetify"].loaded = true
              const {"vuetify": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.10.10",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      