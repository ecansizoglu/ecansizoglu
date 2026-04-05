# Esra Ataer-Cansizoglu — Personal Website

## Files in this folder

```
index.html        → Home page
publications.html → Publications
cv.html           → CV page
news.html         → News
contact.html      → Contact
style.css         → All styles (edit this to change colors/fonts)
nav.js            → Mobile menu (don't need to touch this)
photo.jpg         → YOUR PHOTO — add this yourself (see below)
esraataer-cansizoglu_cv.pdf  → YOUR CV PDF — add this yourself
```

---

## Before you upload: two things to do

### 1. Add your photo
- Get the photo from your WordPress site (right-click the photo → Save image as)
- Name the file exactly: `photo.jpg`
- Place it in this folder

### 2. Add your CV PDF
- Download your CV PDF from your WordPress site
- Name it: `esraataer-cansizoglu_cv.pdf`
- Place it in this folder

### 3. Update your email on the Contact page
- Open `contact.html` in a text editor
- Find `your@email.com` and replace it with your real email address

---

## How to host on GitHub Pages (free)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up for a free account.
Pick a username — your site will be at `username.github.io`

### Step 2 — Create a new repository
- Click the "+" icon in the top right → "New repository"
- Name it exactly: `username.github.io`  
  (replace "username" with your actual GitHub username)
- Make sure it is set to **Public**
- Click "Create repository"

### Step 3 — Upload your files
- On the new repository page, click "uploading an existing file"
- Drag and drop ALL the files from this folder into the upload area
  (index.html, publications.html, cv.html, news.html, contact.html,
   style.css, nav.js, photo.jpg, and your CV PDF)
- Scroll down and click "Commit changes"

### Step 4 — Enable GitHub Pages
- Go to your repository → Settings (tab at the top)
- In the left sidebar, click "Pages"
- Under "Source", select "Deploy from a branch"
- Under "Branch", select "main" and "/ (root)"
- Click Save

### Step 5 — Visit your site
- Wait 1–2 minutes
- Go to: `https://username.github.io`
- Your site is live! 🎉

---

## How to update your site later

When you want to make a change:
1. Edit the HTML file on your computer using any text editor
   (Notepad on Windows, TextEdit on Mac, or download VS Code for free)
2. Go to your GitHub repository
3. Click on the file you changed
4. Click the pencil ✏️ icon to edit, OR click "Add file" → "Upload files"
   to replace the whole file
5. Click "Commit changes"
6. Wait ~1 minute and your live site updates automatically

---

## How to add a custom domain (optional, ~$12/year)

1. Buy a domain at https://www.namecheap.com (e.g. `esracansizoglu.com`)
2. In your GitHub repo → Settings → Pages → Custom domain
3. Enter your domain and click Save
4. In Namecheap, add a CNAME record pointing to `username.github.io`
5. Done — your site will be at your own domain within a few hours

---

## How to edit the site

**Change text:** Open the `.html` file in a text editor, find the text, change it, save.

**Change colors or fonts:** Open `style.css`. At the very top you'll see:
```css
:root {
  --ink: #1a1a18;         /* main text color */
  --accent: #2a4a3e;      /* link/highlight color */
  --paper: #f7f5f0;       /* background color */
  ...
}
```
Change these values to change the whole site's color scheme.

**Add a news item:** Open `news.html`, copy one `<li>...</li>` block,
paste it above the others, and change the date and text.

**Add a publication:** Open `publications.html`, copy one `<li>...</li>`
block within the right section, paste it, and update the title, link, and metadata.
