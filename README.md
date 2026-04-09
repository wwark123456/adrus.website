# ADRUS Premium EmailJS Upgrade

This pack includes:
- EmailJS-ready contact form
- luxury / premium multi-page design
- animations and hover effects
- SEO setup basics for Google

## Files
- `index.html`
- `programs.html`
- `about.html`
- `pricing.html`
- `contact.html`
- `styles.css`
- `script.js`
- `logo.png`
- `robots.txt`
- `sitemap.xml`

## EmailJS setup
This website now uses the EmailJS browser SDK.

### 1. Create your EmailJS setup
Inside EmailJS, create:
- an email service
- an email template
- a public key

### 2. Update script.js
Replace these placeholders:

- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`
- `YOUR_PUBLIC_KEY`

### 3. Match template variables
The contact form sends these field names:
- `name`
- `reply_email`
- `subject`
- `year`
- `message`
- `title`

Your EmailJS template should use the same variable names.

## Upload steps
1. Upload all files to the root of your GitHub repo
2. Replace old files
3. Commit changes
4. Wait for GitHub Pages to republish
5. Hard refresh the site
