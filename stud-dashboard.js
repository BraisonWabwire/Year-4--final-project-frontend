function showContent(event, contentId) {
    // Prevent the link's default behavior (which is to reload the page)
    event.preventDefault();

    // Hide all content sections
    const allSections = document.querySelectorAll('.main-content, .main-studProfile, .main-studAnalytics, .main-studCourses, .main-studTasks, .main-studSettings');
    allSections.forEach(function(section) {
        section.style.display = 'none';  // Hide all sections
    });

    // Show the clicked section,
    const activeSection = document.getElementById(contentId);
    activeSection.style.display = 'block';  // Show the active section
}
