# COVE Network MVP - Quick Start Checklist

## ✅ What's Been Built

Your complete COVE Network MVP website includes:

### 📄 Pages (7 files)
- ✅ **index.html** - Homepage with hero, purpose, benefits, community, events, subscription, contact
- ✅ **directory.html** - Searchable member directory with filters
- ✅ **profile.html** - Individual member profile pages with shareable URLs
- ✅ **join.html** - Join form with Airtable integration
- ✅ **about.html** - About page with story, mission, values
- ✅ **styles.css** - Complete responsive design (mobile-first)
- ✅ **script.js** - JavaScript utilities and form handlers

### 📚 Documentation (4 files)
- ✅ **README.md** - Project overview and setup instructions
- ✅ **SETUP_GUIDE.md** - Detailed 5-step deployment guide
- ✅ **MOCKUP_GUIDE.md** - Visual mockups of all pages
- ✅ **SAMPLE_MEMBERS.csv** - Sample data for testing

### 🎨 Design Features
- ✅ Mobile-first responsive design (works on all devices)
- ✅ Clean, minimal aesthetic
- ✅ Blue (#2c5aa0) + Orange (#f39c12) color scheme
- ✅ Trust-focused, human tone
- ✅ Fast loading (no heavy dependencies)
- ✅ Smooth animations and transitions

### 🔧 Core Functionality
- ✅ Search members by name/business
- ✅ Filter members by industry
- ✅ Shareable profile URLs (e.g., /profile.html?slug=jane-smith-design)
- ✅ Direct contact actions (call, email, website links)
- ✅ Join form with Airtable integration
- ✅ Email subscription form
- ✅ Member count display
- ✅ Responsive navigation

---

## 📋 Your Next Steps (5 Easy Steps)

### **STEP 1: Airtable Setup** (10 minutes)
- [ ] Go to [airtable.com](https://airtable.com)
- [ ] Create a new base (or use existing)
- [ ] Create a table named **`Members`**
- [ ] Add these fields:
  - Name (Single line text)
  - Business Name (Single line text)
  - Email (Email)
  - Phone (Phone number)
  - Industry (Single select: Marketing, Design, Consulting, Tech, Finance, Coaching, Other)
  - Website (URL)
  - Location (Single line text)
  - Description (Long text)
  - Slug (Single line text)
  - Social Links (URL)
  - Status (Single select: Approved, Pending, Rejected)
  - Featured (Checkbox)

### **STEP 2: Get API Credentials** (5 minutes)
- [ ] Go to [airtable.com/account](https://airtable.com/account)
- [ ] Create Personal Access Token → **Copy your API Key**
- [ ] Go to your base → Copy **Base ID** from URL (after "app", before "/tbl")
- [ ] Save both for next step

### **STEP 3: Update Code with Credentials** (5 minutes)
In these three files, replace `YOUR_BASE_ID` and `YOUR_API_KEY`:
- [ ] **directory.html** (line ~155)
- [ ] **profile.html** (line ~66)
- [ ] **join.html** (line ~109)

Example:
```javascript
const AIRTABLE_BASE_ID = 'appXXXXXXXXXXXXXX';
const AIRTABLE_API_KEY = 'patXXXXXXXXXXXXXX';
```

### **STEP 4: Add Your Member Data** (10-15 minutes)
Option A: Manual entry
- [ ] Go to your Airtable table
- [ ] Add your members one by one
- [ ] Set Status to "Approved" for members to appear on directory
- [ ] Make sure each has a "Slug" (URL-friendly version: jane-smith-design)

Option B: Import CSV (faster)
- [ ] Download **SAMPLE_MEMBERS.csv** from your repo
- [ ] In Airtable, click "+" → "Import data" → Upload CSV
- [ ] Replace sample data with your real members
- [ ] Set Status to "Approved"

### **STEP 5: Upload to IONOS** (10 minutes)
- [ ] Download these 7 files from GitHub:
  - index.html
  - directory.html
  - profile.html
  - join.html
  - about.html
  - styles.css
  - script.js

- [ ] Connect to IONOS hosting via FTP:
  - Host: [Your FTP address from IONOS]
  - Username: [Your FTP username]
  - Password: [Your FTP password]

- [ ] Upload all files to `public_html` or `htdocs` folder

- [ ] Visit your domain: **https://covenetwork.co.uk**

---

## 🧪 Testing Checklist (Before Going Live)

### Functionality Tests
- [ ] Homepage loads and looks good
- [ ] All navigation links work
- [ ] Directory page loads
- [ ] Search by name works
- [ ] Filter by industry works
- [ ] Click on member card → Profile page loads
- [ ] Profile shows all member details
- [ ] Call/Email/Website buttons work
- [ ] Join form submits successfully
- [ ] Check Airtable - new "Pending" record appears
- [ ] About page loads
- [ ] Email subscription works

### Mobile Tests
- [ ] Open on iPhone/Android
- [ ] Navigation is readable
- [ ] Buttons are clickable
- [ ] Text is readable
- [ ] Images aren't distorted
- [ ] Forms are easy to use

### Browser Tests
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

---

## 📊 What Should You See After Deployment

### Homepage
- Clear hero section explaining COVE
- 6 benefits cards
- Community gallery section
- Upcoming events section
- Email signup
- Contact info prominently displayed

### Directory
- Search box (functional)
- Industry filter dropdown (functional)
- Member count
- Grid of member cards
- Each card with: business name, person name, industry, description, location, action buttons

### Member Profile
- Full member details
- Contact options (phone, email, website, social)
- COVE Member badge
- Share buttons
- Unique URL for each member

### Join Page
- Application form with 9 fields
- Submit button
- Success message on submission
- New records appear in Airtable as "Pending"

---

## 🚀 After Going Live

### Week 1
- [ ] Test everything thoroughly
- [ ] Ask friends/colleagues to test
- [ ] Fix any bugs
- [ ] Share directory link with members

### Week 2-4
- [ ] Replace placeholder images with real meetup photos
- [ ] Add more members to Airtable
- [ ] Share member profile links as digital business cards
- [ ] Gather feedback from community

### Ongoing
- [ ] Update upcoming events monthly
- [ ] Add new members as they join
- [ ] Share community stories
- [ ] Monitor form submissions
- [ ] Keep contact info current

---

## 🎯 Success Metrics

Your MVP is working when:

✅ Visitors understand COVE within 10 seconds  
✅ Users can join via the form  
✅ Members appear in directory  
✅ Each member has a shareable profile URL  
✅ Search and filters work  
✅ Site is mobile-friendly  
✅ Contact info is clear  
✅ People actually join the community  

---

## 📞 Contact Information on Your Site

**These are already in the code:**
- Phone: +44 7941 448007
- Email: info@covenetwork.co.uk

---

## 🆘 Troubleshooting

### Directory shows no members
- Check Airtable table has records
- Verify Status is set to "Approved"
- Check API credentials are correct
- Open browser console (F12) for errors

### Profile page won't load
- Check slug parameter in URL (should be lowercase, hyphens)
- Verify member exists in Airtable with matching Slug
- Check Status is "Approved"

### Join form doesn't work
- Check API credentials in join.html
- Verify Airtable table exists and has correct fields
- Check browser console for error messages

### Site looks broken on mobile
- Check you're using latest Chrome/Firefox
- Try clearing browser cache
- Test on different device/browser

### Images aren't showing
- This is expected - add your real photos later
- Currently using emoji placeholders
- Update `<div class="placeholder-image">` with `<img>` tags

---

## 📁 File Structure After Upload

```
public_html/
├── index.html          ← Homepage
├── directory.html      ← Directory
├── profile.html        ← Member profiles
├── join.html           ← Join form
├── about.html          ← About page
├── styles.css          ← All styling
├── script.js           ← JavaScript
├── README.md           ← Documentation
├── SETUP_GUIDE.md      ← Setup help
├── MOCKUP_GUIDE.md     ← Visual guide
└── SAMPLE_MEMBERS.csv  ← Sample data (for reference)
```

---

## 💡 Quick Tips

1. **Use short, descriptive Slugs** for profile URLs
   - Good: `jane-smith-design`
   - Bad: `jsdesign123`

2. **Keep descriptions to 1-2 lines** - they work better in cards

3. **Set Featured = Yes** for members you want highlighted

4. **Test the form** by submitting once before members use it

5. **Share profiles** as digital business cards: `covenetwork.co.uk/profile.html?slug=jane-smith-design`

6. **Update events regularly** to keep people engaged

7. **Encourage members to share** their profile links on LinkedIn, email signatures, etc.

---

## 📞 You're All Set!

Everything is ready. Just follow the 5 steps above and your MVP will be live.

**Questions?**
- Check SETUP_GUIDE.md for detailed instructions
- Check MOCKUP_GUIDE.md to see what it should look like
- Review SAMPLE_MEMBERS.csv for data format

**Need help with Airtable?**
- Visit: [airtable.com/help](https://airtable.com/help)
- API Docs: [airtable.com/developers](https://airtable.com/developers)

**Ready to launch COVE?**

Let's go! 🚀

---

**Built for real business community. By business owners. Based on trust.**

Last updated: June 2024
