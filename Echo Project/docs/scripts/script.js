(function () {
    try {
        // Get the filename (e.g. 'blog.html') from the current URL
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1).toLowerCase() || 'achievements.html';

        // map filenames to data-link values
        const mapping = {
            'achievements.html': 'achievements',
            'blog.html': 'blog',
            'projects.html': 'projects',
            'resources.html': 'resources'
        };

        const key = mapping[filename] || null;
        if (!key) return;

        // Find the nav link with matching data-link
        const selector = `.navbar-nav .nav-link[data-link="${key}"]`;
        const el = document.querySelector(selector);
        if (el) {
            // remove active from others (defensive)
            document.querySelectorAll('.navbar-nav .nav-link.active').forEach(n => n.classList.remove('active'));
            el.classList.add('active');
            // set aria-current for accessibility
            el.setAttribute('aria-current', 'page');
        }
    } catch (e) {
        // fail silently in older browsers
        console.warn('Navbar active script error', e);
    }
})();