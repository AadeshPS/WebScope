browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "get_num_a_tags") {
      browser.tabs.executeScript(sender.tab.id, { file: "content-script.js" }, function() {
        browser.tabs.sendMessage(sender.tab.id, { type: "get_num_a_tags" }, function(response) {
          sendResponse({ num_a_tags: response.num_a_tags });
        });
      });
      return true;
    } else if (request.type === "get_num_words") {
      browser.tabs.executeScript(sender.tab.id, { file: "content-script.js" }, function() {
        browser.tabs.sendMessage(sender.tab.id, { type: "get_num_words" }, function(response) {
          sendResponse({ num_words: response.num_words });
        });
      });
      return true;
    }
  });
  