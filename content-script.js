function getNumATags() {
    return document.getElementsByTagName("a").length;
  }
  
  function getNumWords() {
    return document.body.innerText.split(/\s+/).length;
  }
  
  browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "get_num_a_tags") {
      sendResponse({ num_a_tags: getNumATags() });
    } else if (request.type === "get_num_words") {
      sendResponse({ num_words: getNumWords() });
    }
  });
  