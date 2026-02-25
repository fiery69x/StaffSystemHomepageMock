// Navigation menu dropdown functionality

document.addEventListener('DOMContentLoaded', function() {
    const menuHeaders = document.querySelectorAll('.secondary-nav-menu h4, .third-nav-menu h4');

    menuHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parentNav = header.parentElement;
            parentNav.classList.toggle('active');
            console.log('Menu toggles:', header.textContent.trim());
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menus = document.querySelectorAll('.secondary-nav-menu, .third-nav-menu');

    menus.forEach(menu => {
        const header = menu.querySelector('h4');
        const list = menu.querySelector('ul');

        // Create and add the arrow icon programmatically ▶
        const arrow = document.createElement('span');
        arrow.innerHTML = '>';
        arrow.classList.add('menu-arrow');
        header.appendChild(arrow);

        //initial state: hide the list
        list.style.display = 'none';

        header.addEventListener('click', () => {
            const isHidden = list.style.display === 'none';
            list.style.display = isHidden ? 'block' : 'none';
            if (isHidden) {
                arrow.classList.add('rotate-arrow');
            } else {
                arrow.classList.remove('rotate-arrow');
            }
        });
    });
});

// Search bar clear button functionality

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');

    // Monitor the input to show/hide the X
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length > 0) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    });

    // Clear the input when X is clicked
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.remove('visible');
        searchInput.focus();
    });
    // Clear the input when Escape key is pressed
    searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        clearBtn.classList.remove('visible');
        searchInput.blur(); // Optional: remove focus from the bar
    }
    });
});

// Notification dropdown functionality

document.addEventListener('DOMContentLoaded', () => {
    const notifBtn = document.getElementById('notificationDropdown');
    const notifMenu = document.getElementById('notificationMenu');
    const notifCount = document.getElementById('notificationCount');

    // Toggle Menu
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the 'window' click from firing immediately
        console.log('Notification button clicked');
        notifMenu.classList.toggle('active');
        console.log('Active class present:', notifMenu.classList.contains('active'));
    });

    // Close menu if clicking outside
    window.addEventListener('click', () => {
        if (notifMenu.classList.contains('active')) {
            notifMenu.classList.remove('active');
        }
    });

    // Logic to hide badge if count is 0
    if (parseInt(notifCount.textContent) === 0) {
        notifCount.style.display = 'none';
    }
});