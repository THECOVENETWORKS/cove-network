// ===== Utility Functions =====

// Scroll to email section when "Register Interest" is clicked
function scrollToEmailSection() {
    const section = document.getElementById('email-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Email Form Handler =====
document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = emailForm.querySelector('input[placeholder="Your Name"]').value;
            const email = emailForm.querySelector('input[placeholder="Your Email"]').value;
            
            // Show success message
            alert(`Thank you, ${name}! We'll keep you updated on upcoming events and opportunities.`);
            emailForm.reset();
            
            // Note: In production, you would send this data to your backend or Airtable
            console.log('Email subscription:', { name, email, timestamp: new Date() });
        });
    }
});

// ===== Mobile Menu Toggle (if needed in future) =====
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ===== Search and Filter (directory.html) =====
let allMembers = [];

async function loadMembers() {
    const AIRTABLE_BASE_ID = 'YOUR_BASE_ID';
    const AIRTABLE_API_KEY = 'YOUR_API_KEY';
    const AIRTABLE_TABLE_NAME = 'Members';

    try {
        // Members will be loaded via the inline script in directory.html
        // This function serves as a backup
    } catch (error) {
        console.error('Error in loadMembers:', error);
    }
}

function filterMembers() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const industryFilter = document.getElementById('industryFilter')?.value || '';

    if (!allMembers) return;

    let filtered = allMembers.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm) ||
                            member.businessName.toLowerCase().includes(searchTerm) ||
                            member.description.toLowerCase().includes(searchTerm);
        const matchesIndustry = !industryFilter || member.industry === industryFilter;

        return matchesSearch && matchesIndustry;
    });

    displayMembers(filtered);
}

function displayMembers(members) {
    const container = document.getElementById('membersContainer');
    if (!container) return;

    const emptyState = document.getElementById('emptyState');

    if (members.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    
    container.innerHTML = members.map(member => `
        <div class="member-card">
            <div class="member-header">
                <h3>${member.businessName}</h3>
                <p class="member-person">${member.name}</p>
            </div>
            <p class="member-industry"><strong>${member.industry}</strong></p>
            <p class="member-description">${member.description}</p>
            ${member.location ? `<p class="member-location">📍 ${member.location}</p>` : ''}
            <div class="member-actions">
                ${member.phone ? `<a href="tel:${member.phone}" class="action-btn">📞 Call</a>` : ''}
                ${member.email ? `<a href="mailto:${member.email}" class="action-btn">📧 Email</a>` : ''}
                ${member.website ? `<a href="${member.website}" target="_blank" class="action-btn">🌐 Website</a>` : ''}
                <a href="profile.html?slug=${member.slug}" class="action-btn">👤 Profile</a>
            </div>
        </div>
    `).join('');
}

function updateMemberCount(count) {
    const countElement = document.getElementById('memberCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

// ===== Profile Page Functions =====
async function loadProfile() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (!slug) {
        const profileCard = document.getElementById('profileCard');
        if (profileCard) {
            profileCard.innerHTML = '<p>Member not found.</p>';
        }
        return;
    }

    // Profile loading is handled in the inline script in profile.html
}

function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Profile link copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy link');
    });
}

function shareProfile(method) {
    const url = window.location.href;
    const text = 'Check out my COVE Network profile';

    if (method === 'email') {
        window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
    }
}

// ===== Form Validation =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    for (let field of requiredFields) {
        if (!field.value.trim()) {
            alert(`Please fill in the ${field.placeholder || field.name} field.`);
            field.focus();
            return false;
        }
    }
    return true;
}

// ===== Smooth Scrolling for Anchor Links =====
document.addEventListener('DOMContentLoaded', () => {
    // Already handled by html { scroll-behavior: smooth; } in CSS
    
    // Add event listeners for any dynamically added anchor links
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            const targetId = e.target.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== Active Navigation Link =====
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.borderBottom = `3px solid var(--secondary-color)`;
        }
    });
});

// ===== Export for use in other scripts =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToEmailSection,
        toggleMobileMenu,
        filterMembers,
        displayMembers,
        updateMemberCount,
        copyToClipboard,
        shareProfile,
        validateEmail,
        validateForm,
        loadProfile,
        loadMembers
    };
}
