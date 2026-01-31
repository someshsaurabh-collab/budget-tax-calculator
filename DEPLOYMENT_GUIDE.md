# Step-by-Step Guide: Upload Your Code to GitHub

This guide will walk you through uploading your tax calculator code to GitHub, step by step.

---

## Prerequisites
- You have a GitHub account (if not, create one at github.com)
- You have Git installed on your computer (we'll check this first)

---

## Step 1: Check if Git is Installed (2 minutes)

1. **Open Command Prompt (Windows) or Terminal (Mac):**
   - **Windows:** Press `Win + R`, type `cmd`, press Enter
   - **Mac:** Press `Cmd + Space`, type `Terminal`, press Enter

2. **Type this command and press Enter:**
   ```
   git --version
   ```

3. **What you should see:**
   - If you see something like `git version 2.x.x` → Git is installed! ✅
   - If you see an error → Git is NOT installed

4. **If Git is NOT installed:**
   - **Windows:** Download from https://git-scm.com/download/win
   - **Mac:** Usually pre-installed, but if not: https://git-scm.com/download/mac
   - Install it, then restart your Command Prompt/Terminal

---

## Step 2: Navigate to Your Project Folder (1 minute)

1. **In Command Prompt/Terminal, type:**
   ```
   cd
   ```
   Then press Enter (this takes you to your home folder)

2. **Now navigate to your project folder:**
   ```
   cd Desktop\claudecodetest
   ```
   (For Windows - use backslash `\`)
   
   OR
   
   ```
   cd Desktop/claudecodetest
   ```
   (For Mac - use forward slash `/`)

3. **Verify you're in the right place:**
   ```
   dir
   ```
   (Windows) OR
   ```
   ls
   ```
   (Mac)
   
   You should see files like `index.html`, `calculator.js`, etc.

---

## Step 3: Initialize Git Repository (1 minute)

1. **Type this command:**
   ```
   git init
   ```

2. **You should see:** `Initialized empty Git repository in...`

3. **This creates a hidden `.git` folder in your project** (you won't see it, but it's there!)

---

## Step 4: Add All Your Files (1 minute)

1. **Type this command:**
   ```
   git add .
   ```
   (The dot `.` means "add all files")

2. **Nothing will happen visibly, but all your files are now "staged" for upload**

---

## Step 5: Create Your First Commit (1 minute)

1. **Type this command:**
   ```
   git commit -m "Initial commit: Budget 2026 Tax Calculator"
   ```

2. **You might see a message about setting your name/email first. If so:**
   ```
   git config --global user.name "Your Name"
   git config --global user.email "somesh.saurabh.official@gmail.com"
   ```
   (Replace "Your Name" with your actual name)

3. **Then run the commit command again:**
   ```
   git commit -m "Initial commit: Budget 2026 Tax Calculator"
   ```

4. **You should see:** `[main (or master) XXXXX] Initial commit...`

---

## Step 6: Create Repository on GitHub (5 minutes)

1. **Go to github.com and log in**

2. **Click the "+" icon in the top right corner**
   - Select "New repository"

3. **Fill in the details:**
   - **Repository name:** `budget-tax-calculator`
   - **Description:** `Budget 2026 Income Tax Calculator for India`
   - **Visibility:** Select "Public" (so Vercel can access it)
   - **DO NOT** check "Initialize with README" (we already have files)
   - **DO NOT** add .gitignore or license

4. **Click "Create repository"**

5. **You'll see a page with instructions. DON'T follow those yet!** 
   - We'll use the "push an existing repository" option

---

## Step 7: Connect Your Local Code to GitHub (2 minutes)

1. **On the GitHub page you just created, you'll see a section that says:**
   "…or push an existing repository from the command line"

2. **Copy the first command** (it looks like this):
   ```
   git remote add origin https://github.com/YOUR-USERNAME/budget-tax-calculator.git
   ```
   (Replace YOUR-USERNAME with your actual GitHub username)

3. **Paste it into your Command Prompt/Terminal and press Enter**

4. **Copy the second command:**
   ```
   git branch -M main
   ```
   (This renames your branch to "main")

5. **Paste and press Enter**

6. **Copy the third command:**
   ```
   git push -u origin main
   ```

7. **Paste and press Enter**

8. **You'll be asked to log in:**
   - **Username:** Your GitHub username
   - **Password:** You'll need a Personal Access Token (see Step 8 below)

---

## Step 8: Create Personal Access Token (5 minutes)

GitHub no longer accepts regular passwords. You need a token:

1. **On GitHub, click your profile picture (top right)**
   - Click "Settings"

2. **Scroll down on the left sidebar, click "Developer settings"**

3. **Click "Personal access tokens"**
   - Click "Tokens (classic)"

4. **Click "Generate new token"**
   - Select "Generate new token (classic)"

5. **Fill in:**
   - **Note:** `Vercel Deployment`
   - **Expiration:** Choose 90 days (or longer)
   - **Select scopes:** Check `repo` (this gives full repository access)

6. **Click "Generate token" at the bottom**

7. **IMPORTANT:** Copy the token immediately! It looks like: `ghp_xxxxxxxxxxxxx`
   - You won't be able to see it again!

8. **Go back to your Command Prompt/Terminal**
   - When it asks for password, paste the token instead
   - Press Enter

9. **You should see:** `Writing objects: 100%...` and then success!

---

## Step 9: Verify Upload (1 minute)

1. **Go back to your GitHub repository page**
   - Refresh the page

2. **You should now see all your files:**
   - `index.html`
   - `calculator.js`
   - `style.css`
   - `privacy.html`
   - `terms.html`
   - `about.html`
   - etc.

3. **✅ Success! Your code is now on GitHub!**

---

## Troubleshooting

### Problem: "git: command not found"
**Solution:** Git is not installed. Go back to Step 1 and install Git.

### Problem: "fatal: not a git repository"
**Solution:** You're not in the right folder. Go back to Step 2 and make sure you're in `claudecodetest` folder.

### Problem: "Permission denied" when pushing
**Solution:** 
- Make sure you used the Personal Access Token (not your password)
- Check that the token has `repo` scope selected

### Problem: "remote origin already exists"
**Solution:** Run this command first:
```
git remote remove origin
```
Then go back to Step 7.

---

## What's Next?

Once your code is on GitHub, you can proceed to **Step 3: Deploy to Vercel** from the previous guide!

---

## Quick Reference Commands

Here are all the commands in order (for quick copy-paste):

```bash
# Navigate to project
cd Desktop\claudecodetest

# Initialize Git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Budget 2026 Tax Calculator"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/budget-tax-calculator.git

# Rename branch
git branch -M main

# Push to GitHub
git push -u origin main
```

---

**Good luck! Take your time and follow each step carefully. If you get stuck, let me know!** 🚀
