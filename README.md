# React + OpenAPI Generator + Mockoon

This is a [React](https://react.dev/) app to showcase the usage of [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) and [Mockoon](https://mockoon.com/).

## Quickstart

### Install dependencies
```bash
npm install
```

### Generate api implementation

#### With Docker
```bash
npm openapi-generator-docker
```

#### Using cli
```bash
npm install @openapitools/openapi-generator-cli -g
npm openapi-generator
```

### Start Mockoon server with Docker
```bash
docker run -d --mount type=bind,source=./src/data/api/openapi.json,target=/data,readonly -p 3003:3003 mockoon/cli:latest -d data -p 3003
```

### Start application
```bash
npm start
```