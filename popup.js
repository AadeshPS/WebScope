function updatePopup() {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, { type: "get_num_a_tags" }, function(response) {
        document.getElementById("num-a-tags").textContent = response.num_a_tags;
      });
      browser.tabs.sendMessage(tabs[0].id, { type: "get_num_words" }, function(response) {
        document.getElementById("num-words").textContent = parseInt(response.num_words/238);
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    updatePopup();
  });
  