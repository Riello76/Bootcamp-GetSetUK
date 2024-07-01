window.onload = () => {
    // Wait for the window to load before executing the following code
    const tab_switchers = document.querySelectorAll("[data-switcher]");
  
    // Loop through each element with the attribute [data-switcher]
    for (let i = 0; i < tab_switchers.length; i++) {
      const tab_switcher = tab_switchers[i]; // Get each tab switcher element
      const page_id = tab_switcher.dataset.tab; // Get the data-tab attribute value
  
      // Add a click event listener to each tab switcher
      tab_switcher.addEventListener("click", () => {
        // Remove the 'is-active' class from the currently active tab
        document
          .querySelector(".tab.is-active")
          .classList.remove("is-active");
  
        // Add the 'is-active' class to the parent element of the clicked tab switcher
        tab_switcher.parentNode.classList.add("is-active");
  
        // Call the switchPage function with the page_id to switch to the corresponding page
        switchPage(page_id);
      });
    }
  };
  
  // Function to switch to the page with the given page_id
  function switchPage(page_id) {
    // Remove the 'is-active' class from the currently active page
    const current_page = document.querySelector(".page.is-active");
    current_page.classList.remove("is-active");
  
    // Add the 'is-active' class to the page with the data-page attribute matching page_id
    const next_page = document.querySelector(`.page[data-page="${page_id}"]`);
    next_page.classList.add("is-active");
  }
  