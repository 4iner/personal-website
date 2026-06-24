# Mustafa Ameen — Personal Website

Source for [mufasa.ca](https://mufasa.ca), my personal portfolio site.

## Stack

- **[Gatsby 5](https://www.gatsbyjs.com/)** (React 19) static site
- **[@mui/system](https://mui.com/system/)** `styled` for component styling
- **[react-three-fiber](https://docs.pmnd.rs/react-three-fiber)** / drei for the 3D skills carousel
- Hosted on **AWS S3 + CloudFront**, deployed with `gatsby-plugin-s3`

## Local development

Requires the Node version in [`.nvmrc`](.nvmrc) (`nvm use`).

```bash
npm install      # uses legacy-peer-deps (see .npmrc)
npm run develop  # dev server at http://localhost:8000
```

## Useful scripts

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run develop` | Start the local dev server        |
| `npm run build`   | Production build into `public/`   |
| `npm run serve`   | Serve the production build        |
| `npm run lint`    | Lint with ESLint (flat config)    |
| `npm run format`  | Format with Prettier              |
| `npm run clean`   | Clear the Gatsby cache            |

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/serve.yml`](.github/workflows/serve.yml), which builds the
site, deploys it to S3 via `npm run deploy`, and invalidates the CloudFront
distribution.
