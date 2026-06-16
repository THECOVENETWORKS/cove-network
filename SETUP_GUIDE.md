# COVE Network MVP - Setup & Deployment Guide

## Quick Start (5 Steps)

### Step 1: Set Up Airtable Base

1. Go to [airtable.com](https://airtable.com) and log in
2. Create a **new base** (or use existing)
3. Create a table named **`Members`**
4. Add these fields to your Members table:

| Field Name | Field Type | Required |
|-----------|-----------|----------|
| Name | Single line text | ✓ |
| Business Name | Single line text | ✓ |
| Email | Email | ✓ |
| Phone | Phone number | ✓ |
| Industry | Single select | ✓ |
| Website | URL | |
| Location | Single line text | |
| Description | Long text | ✓ |
| Slug | Single line text | ✓ |
| Social Links | URL | |
| Status | Single select | ✓ |
| Featured | Checkbox | |

#### Single Select Options for "Industry":
- Marketing
- Design
- Consulting
- Tech
- Finance
- Coaching
- Other

#### Single Select Options for "Status":
- Approved
- Pending
- Rejected

### Step 2: Get Your Airtable API Credentials

1. Go to [airtable.com/account](https://airtable.com/account)
2. Click **"Create token"** (or generate a Personal Access Token)
3. Copy your **API Key**
4. Go to any of your bases and copy the **Base ID** from the URL:
   - URL format: `https://airtable.com/app[BASE_ID]/tblXXX...`
   - Copy everything after `app` and before `/tbl`

### Step 3: Update API Credentials in Files

Replace `YOUR_BASE_ID` and `YOUR_API_KEY` in these files:

**directory.html** (around line 155):
```javascript
const AIRTABLE_BASE_ID = 'appXXXXXXXXXXXXXX'; // Your Base ID
const AIRTABLE_API_KEY = 'patXXXXXXXXXXXXXX'; // Your API Key
```

**profile.html** (around line 66):
```javascript
const AIRTABLE_BASE_ID = 'appXXXXXXXXXXXXXX'; // Your Base ID
const AIRTABLE_API_KEY = 'patXXXXXXXXXXXXXX'; // Your API Key
```

**join.html** (around line 109):
```javascript
const AIRTABLE_BASE_ID = 'appXXXXXXXXXXXXXX'; // Your Base ID
const AIRTABLE_API_KEY = 'patXXXXXXXXXXXXXX'; // Your API Key
```

### Step 4: Add Your Member Data to Airtable

Add your members to the Airtable table. Example:

| Name | Business Name | Email | Phone | Industry | Website | Location | Description | Slug | Status |
|------|---------------|-------|-------|----------|---------|----------|-------------|------|--------|
| Jane Smith | Smith Design Co | jane@example.com | +44 1234 567890 | Design | www.smithdesign.co.uk | London | Brand & design strategy | jane-smith-design | Approved |
| Tom Johnson | Tech Consulting Ltd | tom@example.com | +44 1234 567891 | Consulting | www.techconsultingltd.co.uk | Manchester | IT consulting for SMEs | tom-johnson-consulting | Approved |

**Important:** The `Slug` field should be URL-friendly (lowercase, hyphens, no spaces). Example: `jane-smith-design`

### Step 5: Deploy to IONOS

#### Option A: Upload via FTP (Recommended for IONOS)

1. Download all files from the GitHub repository:
   - index.html
   - directory.html
   - profile.html
   - join.html
   - about.html
   - styles.css
   - script.js

2. Connect to your IONOS hosting via FTP:
   - Host: Your FTP address (from IONOS control panel)
   - Username: Your FTP username
   - Password: Your FTP password

3. Upload all files to the `public_html` or `htdocs` folder

4. Visit your domain (e.g., covenetwork.co.uk) to see the live site!

#### Option B: Using Git (If IONOS supports it)

1. Clone this repository to your local machine
2. Push to your IONOS hosting via SSH/Git (if available)

---

## Website Structure & Pages

### 1. **Homepage** (`index.html`)
- **Hero section** with COVE tagline and CTA buttons
- **Purpose section** explaining what COVE is
- **Benefits grid** (6 key reasons to join)
- **Community gallery** (photo placeholders)
- **Upcoming events** section
- **Email subscription** form
- **Contact info** (phone & email)

**URL:** `https://covenetwork.co.uk/`

### 2. **Directory Page** (`directory.html`)
- **Search bar** to find members by name or business
- **Industry filter** dropdown
- **Member count** display
- **Responsive grid** of member cards
- Each card shows:
  - Business name
  - Person name
  - Industry
  - Description
  - Location (if available)
  - Action buttons (Call, Email, Website, Profile)

**URL:** `https://covenetwork.co.uk/directory.html`

### 3. **Member Profile Page** (`profile.html`)
- **Full member details** (fetched from URL parameter)
- **Shareable profile URL** example: `/profile.html?slug=jane-smith-design`
- Contact links (phone, email, website, social)
- **COVE Member badge**
- **Share buttons** (copy link, email)

**URL:** `https://covenetwork.co.uk/profile.html?slug=jane-smith-design`

### 4. **Join Form** (`join.html`)
- **Application form** with fields:
  - Name
  - Business Name
  - Email
  - Phone
  - Industry (dropdown)
  - Website
  - Location
  - Business Description
  - Why you want to join
- **Airtable integration** (saves to "Pending" status)
- **Success confirmation** message

**URL:** `https://covenetwork.co.uk/join.html`

### 5. **About Page** (`about.html`)
- **Our Story** section
- **Mission** statement
- **Core Values** (Trust, Collaboration, Community, Authenticity)
- **What Makes Us Different** (unique points)
- **CTA to join**

**URL:** `https://covenetwork.co.uk/about.html`

---

## Design & Features

### Color Scheme
- **Primary Blue:** `#2c5aa0`
- **Accent Orange:** `#f39c12`
- **Dark Gray:** `#2c3e50`
- **Light Gray:** `#ecf0f1`

### Key Features
✅ Mobile-first responsive design  
✅ Search & filter functionality  
✅ Shareable member profile links  
✅ Direct contact actions (call, email, website)  
✅ Email subscription form  
✅ Clean, minimal aesthetic  
✅ Trust-focused messaging  
✅ Real community tone (no corporate fluff)

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Testing Before Going Live

### 1. Test Locally
Open files directly in your browser (no server needed for static content)

### 2. Test Airtable Connection
1. Add a test member to Airtable with Status = "Approved"
2. Visit `directory.html` and verify the member appears
3. Click on their profile and verify all details load

### 3. Test Forms
1. Go to `join.html` and submit the form
2. Check your Airtable table - a new "Pending" record should appear

### 4. Test All Links
- Navigation links work
- All CTAs point to correct pages
- Contact links (phone, email) work
- Social/website links open in new tabs

### 5. Test Mobile
- Use Chrome DevTools (F12) → Device toolbar
- Test on actual mobile devices if possible
- Verify buttons are clickable on touch devices

---

## After Going Live

### Next Steps

1. **Add Real Photos**
   - Replace placeholder images in gallery with real meetup photos
   - Update community section with authentic visuals

2. **Promote the Directory**
   - Share member profile links as digital business cards
   - Encourage members to share: `covenetwork.co.uk/profile.html?slug=their-slug`

3. **Regular Updates**
   - Add new members to Airtable (they'll auto-appear on directory)
   - Update upcoming events section
   - Share community stories and member spotlights

4. **SEO & Analytics (Optional)**
   - Add Google Analytics
   - Create meta descriptions for better SEO
   - Submit sitemap to Google Search Console

---

## FAQ

**Q: How do new members appear on the directory?**  
A: They must have Status = "Approved" in Airtable. Review applications and change "Pending" to "Approved" when you approve them.

**Q: Can members update their own profiles?**  
A: This MVP doesn't have member login. For now, they submit via the join form and you manage updates in Airtable.

**Q: How do I add more industries?**  
A: Edit the `<select>` dropdown in join.html and directory.html, plus the "Industry" field options in your Airtable table.

**Q: Can I add more pages?**  
A: Yes! Copy the structure of any existing page and follow the same HTML/CSS pattern.

**Q: Is there a cost?**  
A: 
- IONOS hosting: Standard plan (your existing hosting)
- Airtable: Free tier supports 1,200 records (plenty for an MVP)

---

## Support & Contact

**For questions about the site:**
- Phone: +44 7941 448007
- Email: info@covenetwork.co.uk

**For technical issues:**
- Check the README.md
- Review Airtable API documentation
- Test in browser console for JavaScript errors

---

## File Checklist Before Uploading

- [ ] README.md
- [ ] script.js
- [ ] styles.css
- [ ] index.html (with contact info updated)
- [ ] directory.html (with Airtable credentials)
- [ ] profile.html (with Airtable credentials)
- [ ] join.html (with Airtable credentials)
- [ ] about.html
- [ ] Airtable Base created and configured
- [ ] Test member data added to Airtable

---

## Success Metrics

Your MVP is successful when:

1. ✅ Visitors understand COVE within 10 seconds
2. ✅ Users can easily join via the form
3. ✅ Members are visible in the directory
4. ✅ Each member has a shareable profile link
5. ✅ People browse the directory organically
6. ✅ Site feels real, human, and trustworthy
7. ✅ Mobile experience is smooth
8. ✅ Contact information is prominent

---

**Built for real business community. By business owners. Based on trust.**
