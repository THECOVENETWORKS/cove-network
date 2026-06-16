# COVE Network MVP

A lightweight community website for COVE Network—a UK-based community of business owners focused on trust, referrals, collaboration, and real-world relationships.

## Project Overview

COVE Network is a simple, human-focused community platform that helps business owners:

- Understand what COVE is and why it exists
- Join the community
- Discover members in a searchable directory
- Share their public profile link as a digital business card
- Get in touch easily

## Features

### 1. **Homepage** (`index.html`)
- Hero section with clear tagline and CTA buttons
- Purpose and mission explanation
- Benefits of joining (6 key points)
- Community section with photo gallery placeholders
- Upcoming events section
- Email subscription for updates
- Contact information (phone & email)

### 2. **Directory Page** (`directory.html`)
- Searchable member directory
- Filter by industry
- Member cards with business info, description, and contact actions
- Displays approved members from Airtable
- Responsive grid layout

### 3. **Member Profile Pages** (`profile.html`)
- Unique shareable URL for each member (e.g., `/profile.html?slug=jane-smith-design`)
- Full member details
- Contact options (phone, email, website, social)
- Share buttons (copy link, email)
- COVE member badge

### 4. **Join Form** (`join.html`)
- Simple application form with fields:
  - Name
  - Business Name
  - Email
  - Phone
  - Industry (dropdown)
  - Website
  - Location
  - Business Description
  - Why you want to join
- Integrates with Airtable (records stored with "Pending" status)
- Success confirmation message

### 5. **About Page** (`about.html`)
- Brand story
- Mission statement
- Core values (Trust, Collaboration, Community, Authenticity)
- What makes COVE different
- CTA to join

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Backend**: Airtable (for member data and form submissions)
- **Hosting**: IONOS standard hosting (static HTML/CSS/JS)
- **API**: Axios for Airtable API calls
- **Design**: Mobile-first, responsive CSS Grid & Flexbox

## Getting Started

### Installation

1. Clone this repository
2. Update Airtable credentials in the following files:
   - `directory.html` - Replace `YOUR_BASE_ID` and `YOUR_API_KEY`
   - `profile.html` - Replace `YOUR_BASE_ID` and `YOUR_API_KEY`
   - `join.html` - Replace `YOUR_BASE_ID` and `YOUR_API_KEY`
3. Upload all files to IONOS hosting
3. Visit your domain

### Airtable Setup

Create a table named `Members` with these fields:

| Field Name | Type | Description |
|-----------|------|-------------|
| Name | Single line text | Member's name |
| Business Name | Single line text | Business/company name |
| Email | Email | Contact email |
| Phone | Phone number | Contact phone |
| Industry | Single select | Industry (Marketing, Design, Consulting, Tech, Finance, Coaching, Other) |
| Website | URL | Business website |
| Location | Single line text | City, country |
| Description | Long text | 1-2 line business description |
| Slug | Single line text | URL-friendly slug (e.g., jane-smith-design) |
| Social Links | URL | Social media profile link |
| Status | Single select | Approved, Pending, Rejected |
| Featured | Checkbox | Featured member? (optional) |

### Getting Airtable API Credentials

1. Go to [airtable.com](https://airtable.com)
2. Log in to your account
3. Go to [Account Settings > API](https://airtable.com/account)
4. Generate a Personal Access Token (PAT)
5. Copy your Base ID from the URL when viewing your base
6. Update the credentials in the three files mentioned above

## File Structure

```
cove-network/
├── index.html          # Homepage
├── directory.html      # Member directory
├── profile.html        # Individual member profile
├── join.html           # Join form
├── about.html          # About page
├── styles.css          # All styling
├── script.js           # JavaScript utilities
└── README.md           # This file
```

## Design Features

- **Mobile-first responsive design** - Works perfectly on all devices
- **Clean, minimal aesthetic** - No corporate feel
- **Warm, human tone** - Focus on authenticity and real connections
- **Community-focused color scheme** - Blue primary (#2c5aa0), orange accent (#f39c12)
- **Trust-building design** - Real photos, genuine stories

## Contact Information

- **Phone**: +44 7941 448007
- **Email**: info@covenetwork.co.uk

## Future Enhancements (Post-MVP)

- Member testimonials/case studies
- Events calendar with RSVP
- Member spotlights/blog
- Referral tracking (simple metrics)
- Photo/logo uploads for members
- Advanced filtering and search
- Email notifications for new events
- Social media integration

## Non-Goals (Out of Scope)

- Mobile app
- Payment system
- Complex user authentication
- Marketplace functionality
- Advanced automation
- Heavy CRM system

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: No heavy frameworks or dependencies (except Axios for API)
- **Fast loading**: Static HTML/CSS with minimal JavaScript
- **Mobile optimized**: Responsive design with optimized assets
- **SEO friendly**: Semantic HTML, proper headings, meta tags

## Security Notes

- Airtable API key should be kept secure
- Consider using a backend proxy for production (API key won't be exposed)
- Form submissions are validated client-side and server-side (Airtable)

## License

Copyright © 2024 COVE Network. All rights reserved.

## Support

For issues, questions, or feature requests, contact info@covenetwork.co.uk or call +44 7941 448007.

---

**Built for real business community. By business owners. Based on trust.**
