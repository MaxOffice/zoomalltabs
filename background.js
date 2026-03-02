// Listen for new tabs being created
chrome.tabs.onCreated.addListener(function(tab) {
  chrome.storage.local.get(['applyToNewTabs', 'currentZoom'], function(result) {
    // Only apply zoom if the checkbox is enabled and we have a zoom level set
    if (result.applyToNewTabs && result.currentZoom) {
      // Small delay to ensure tab is ready
      setTimeout(() => {
        chrome.tabs.setZoom(tab.id, result.currentZoom);
      }, 100);
    }
  });
});
