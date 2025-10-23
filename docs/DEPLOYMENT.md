# Deployment Guide - Vercel

## 🚀 Quick Deploy

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Your code pushed to GitHub

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   
   Add these in Vercel Dashboard → Settings → Environment Variables:
   
   ```bash
   # Database (if using)
   DATABASE_URL=file:./db.sqlite
   
   # NextAuth (if using authentication)
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=https://your-domain.vercel.app
   
   # Discord OAuth (if using)
   DISCORD_CLIENT_ID=your-discord-client-id
   DISCORD_CLIENT_SECRET=your-discord-client-secret
   ```
   
   **Generate NEXTAUTH_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

## 🔄 Automatic Deployments

Every push to `main` branch triggers automatic deployment.

### Branch Deployments
- `main` → Production (your-app.vercel.app)
- Other branches → Preview URLs

## 📊 Post-Deployment

### Set Custom Domain
1. Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records (Vercel provides instructions)

### Monitor Performance
- Vercel Dashboard → Analytics
- View page performance, visitor stats
- Monitor build times and errors

### Enable Speed Insights (Optional)
```bash
npm install @vercel/speed-insights
```

Add to `src/app/layout.tsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## 🛠️ Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Verify all environment variables are set

### Database Issues
For production, consider upgrading from SQLite:
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [PlanetScale](https://planetscale.com/)
- [Supabase](https://supabase.com/)

### Prisma Deployment
If using Prisma, add to `package.json`:
```json
{
  "scripts": {
    "vercel-build": "prisma generate && prisma migrate deploy && next build"
  }
}
```

## 📱 Preview Deployments

Every Pull Request gets its own preview URL:
- Test changes before merging
- Share with team/clients
- Automatic cleanup after PR merge

## 🔒 Security Best Practices

- ✅ Use environment variables for secrets
- ✅ Enable "Protection" on production branch
- ✅ Set up team access controls
- ✅ Use Vercel Firewall (paid plans)
- ✅ Enable HTTPS (automatic on Vercel)

## 📈 Scaling

Vercel automatically scales based on traffic:
- **Free Tier**: 100GB bandwidth/month
- **Pro**: Unlimited bandwidth
- **Enterprise**: Custom limits + SLA

## 🌍 Edge Network

Your app is deployed to Vercel's global Edge Network:
- Automatic CDN
- DDoS protection
- SSL/TLS certificates
- HTTP/2 & HTTP/3 support

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
