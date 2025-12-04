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

  // Module Sidebar Toggle
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const moduleSidebar = document.querySelector('.module-sidebar');

  if (sidebarToggle && moduleSidebar) {
    // Do not auto-apply a previously saved collapsed state on load.
    // Let users toggle manually; saved state will be updated on toggle.
    sidebarToggle.addEventListener('click', () => {
      moduleSidebar.classList.toggle('collapsed');

      // Save state to localStorage
      const isCollapsed = moduleSidebar.classList.contains('collapsed');
      localStorage.setItem('sidebarCollapsed', isCollapsed);
    });
  }

  // Keyboard shortcut: Ctrl+B to toggle sidebar
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      if (moduleSidebar && sidebarToggle) {
        moduleSidebar.classList.toggle('collapsed');
        const isCollapsed = moduleSidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
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

// Toggle module expansion/collapse in sidebar
function toggleModule(moduleId) {
  const pagesDiv = document.getElementById(moduleId + '-pages');
  const chevron = document.getElementById(moduleId + '-chevron');

  if (pagesDiv && chevron) {
    if (pagesDiv.style.display === 'none') {
      pagesDiv.style.display = 'block';
      chevron.style.transform = 'rotate(180deg)';
    } else {
      pagesDiv.style.display = 'none';
      chevron.style.transform = 'rotate(0deg)';
    }

    // Re-initialize feather icons after DOM changes
    if (typeof feather !== 'undefined') {
      setTimeout(() => feather.replace(), 0);
    }
  }
}

// Load sidebar dynamically from partials/sidebar.html
async function loadSidebar(activePage, sidebarPath = '../partials/sidebar.html') {
  const sidebarContainer = document.getElementById('sidebar-container');
  if (!sidebarContainer) return;

  try {
    const response = await fetch(sidebarPath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    sidebarContainer.innerHTML = html;

    // Mark active page if specified
    if (activePage) {
      // Find all links that match the active page (handle both relative and absolute paths)
      const links = sidebarContainer.querySelectorAll('a.module-nav-item');
      links.forEach(link => {
        const href = link.getAttribute('href');
        // Check if the link ends with the active page name
        if (href && (href.endsWith(activePage) || href.includes('/' + activePage))) {
          link.classList.add('active');

          // Expand parent module
          const parentModule = link.closest('.module-pages');
          if (parentModule) {
            parentModule.style.display = 'block';
            const moduleId = parentModule.id.replace('-pages', '');
            const chevron = document.getElementById(moduleId + '-chevron');
            if (chevron) {
              chevron.style.transform = 'rotate(180deg)';
            }
          }
        }
      });
    }

    // Re-initialize feather icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    // Re-attach sidebar toggle event listener after sidebar is loaded
    const sidebarToggle = sidebarContainer.querySelector('.sidebar-toggle');
    const moduleSidebar = sidebarContainer.querySelector('.module-sidebar');

    if (sidebarToggle && moduleSidebar) {
      // Attach toggle behavior for dynamically loaded sidebar.
      // We don't auto-apply saved collapsed state on load to avoid hiding
      // the header unexpectedly for users. The state will be saved when
      // they explicitly toggle the sidebar.
      sidebarToggle.addEventListener('click', () => {
        moduleSidebar.classList.toggle('collapsed');
        const isCollapsed = moduleSidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
      });
    }

  } catch (error) {
    console.error('Failed to load sidebar:', error);
    // Fallback: show error message in sidebar container
    sidebarContainer.innerHTML = `
      <aside class="module-sidebar">
        <div style="padding: 24px; text-align: center; color: #DC2626;">
          <p>Failed to load navigation sidebar.</p>
          <p style="font-size: 12px; color: #6B7280; margin-top: 8px;">
            Please ensure you're running a local web server.
          </p>
        </div>
      </aside>
    `;
  }
}

// Export for Angular migration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { openModal, closeModal, validateForm, toggleModule, loadSidebar };
}
