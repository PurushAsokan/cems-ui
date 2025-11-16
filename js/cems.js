/**
 * CEMS JavaScript Utilities
 * Minimal DOM interactions - Angular migration ready
 */

// Dropdown menu toggle
document.addEventListener('DOMContentLoaded', () => {

  // Initialize Feather Icons first
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // Dropdown toggles
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Close other dropdowns
        document.querySelectorAll('.dropdown.active').forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('active');
          }
        });

        // Toggle current
        dropdown.classList.toggle('active');
      });

      // Allow links to work, but stop propagation
      menu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          // Let the link navigate normally - don't prevent default
        });
      });
    }
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.active').forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  });

  // Close dropdown on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });

  // Keyboard shortcut: Ctrl+K for search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('.topnav-search input');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

});

// Modal utilities (basic implementation)
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Form validation helper
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let isValid = true;
  const requiredInputs = form.querySelectorAll('[required], .required input, .required select');

  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#DC2626';
      isValid = false;
    } else {
      input.style.borderColor = '#E5E7EB';
    }
  });

  return isValid;
}

// Export for Angular migration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { openModal, closeModal, validateForm };
}
