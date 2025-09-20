# Morada do Sol Ovos Caipiras - Build Configuration

# Vercel Deployment (vercel.json)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}

# Netlify Deployment (_redirects)
/*    /index.html   200

# Environment Variables Template (.env.example)
# Copy this to .env.production for production builds
# VITE_APP_TITLE="Morada do Sol Ovos Caipiras"
# VITE_API_URL="https://your-api-endpoint.com"

# Build Commands Summary
# Development: npm run dev
# Production Build: npm run build  
# Preview Build: npm run preview
# Lint: npm run lint