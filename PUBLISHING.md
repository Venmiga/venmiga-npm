# Publishing venmiga-sdk to npm

## Fixing the 403 "Two-factor authentication required" Error

npm requires **2FA** or a **granular access token** to publish packages. If you see:

```
npm error 403 Two-factor authentication or granular access token with bypass 2fa enabled is required
```

### Option 1: Enable 2FA on your npm account (Recommended)

1. Go to [npmjs.com](https://www.npmjs.com) → Sign in → **Account** → **Enable 2FA**
2. Use an authenticator app (Google Authenticator, Authy, etc.)
3. Run `npm publish` — you'll be prompted for the OTP code

### Option 2: Use a Publish Token with Bypass 2FA

1. On npmjs.com: **Avatar** → **Access Tokens** → **Generate New Token**
2. Select **Granular Access Token**
3. Set permissions: **Packages and scopes** → **Read and write**
4. Enable **Bypass 2FA for publish**
5. Generate and copy the token
6. Run:
   ```bash
   npm login
   # Username: your-npm-username
   # Password: paste-your-token-here
   # Email: your@email.com
   ```
7. Run `npm publish`

---

## Publishing Steps

```bash
# 1. Build
npm run build

# 2. Dry run (see what would be published)
npm publish --dry-run

# 3. Publish
npm publish --access public
```

## Version Bumping

```bash
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
```
