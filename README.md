# react-material-ui-table

> A modern React library for creating Material-UI tables with server-side support

[![NPM](https://img.shields.io/npm/v/@thecassion/react-material-ui-table.svg)](https://www.npmjs.com/package/@thecassion/react-material-ui-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requirements

- React 19.0.0+
- Material-UI (MUI) 6.3.0+
- Node.js 18.0.0+

## Install

```bash
npm install @thecassion/react-material-ui-table
```

## Usage

```jsx
import React from 'react'
import { Table } from '@thecassion/react-material-ui-table'

function Example() {
  return (
    <Table data={[]} />
  )
}

export default Example
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch for changes
npm start

# Run tests
npm test
```

## Publishing

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Build
npm run build

# Version bump
npm version major|minor|patch

# Publish
npm publish --access public
```

## License

MIT © [thecassion](https://github.com/thecassion)
