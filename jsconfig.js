{
    "compilerOptions": {
        "baseUrl": "./src",
        "checkJs": true,
        "jsx": "react",
        "plugins": [
            {
              "name": "typescript-styled-plugin",
              "tags":["styled","({ theme }) => "],
              "lint":{
                "unknownProperties":"warning"
              }
            }
          ]
    }
}