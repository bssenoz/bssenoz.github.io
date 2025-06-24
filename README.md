# Nuxt.js Portfolio App

This is a portfolio application developed with Nuxt.js 3.

## 🚀 GitHub Pages Deployment

This project is automatically deployed to GitHub Pages.

### Deployment Steps:

1. **Push the repository to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **GitHub Repository Settings:**
   - Go to your repository's Settings tab
   - Find the Pages section
   - Select "GitHub Actions" as the source

3. **Automatic Deployment:**
   - Your project will be automatically deployed every time you push to the `main` branch
   - The GitHub Actions workflow will build the project and upload it to GitHub Pages

### Important Notes:

- **Special Repository Name**: This repository is named `bssenoz.github.io`, which means it will be available at `https://bssenoz.github.io/` (root domain)
- The project is configured with `target: 'static'` and `ssr: false`
- `baseURL` is set to `/` for root domain deployment
- All static files are generated in the `.output/public` folder

### Local Development:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run generate

# Preview
npm run preview
```

### Technologies:

- Nuxt.js 3
- Vue 3
- Tailwind CSS
- TypeScript
- i18n (Turkish/English)
- Pinia (State Management)

## 📝 License

This project is licensed under the MIT License. 