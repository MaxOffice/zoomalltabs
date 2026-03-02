document.addEventListener('DOMContentLoaded', function() {
  const zoomLevel = document.getElementById('zoomLevel');
  const applyBtn = document.getElementById('applyBtn');
  const resetBtn = document.getElementById('resetBtn');
  const applyToNew = document.getElementById('applyToNew');

  // Load saved settings
  chrome.storage.local.get(['applyToNewTabs', 'currentZoom'], function(result) {
    if (result.applyToNewTabs !== undefined) {
      applyToNew.checked = result.applyToNewTabs;
    }
    if (result.currentZoom !== undefined) {
      zoomLevel.value = result.currentZoom;
    }
  });

  // Apply zoom to all tabs
  applyBtn.addEventListener('click', function() {
    const zoom = parseFloat(zoomLevel.value);
    
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(tab => {
        chrome.tabs.setZoom(tab.id, zoom);
      });
    });

    // Save settings
    chrome.storage.local.set({
      currentZoom: zoom,
      applyToNewTabs: applyToNew.checked
    });
  });

  // Reset all tabs to 100%
  resetBtn.addEventListener('click', function() {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(tab => {
        chrome.tabs.setZoom(tab.id, 1.0);
      });
    });

    // Reset UI and storage
    zoomLevel.value = '1.0';
    chrome.storage.local.set({
      currentZoom: 1.0,
      applyToNewTabs: applyToNew.checked
    });
  });

  // Save checkbox state when changed
  applyToNew.addEventListener('change', function() {
    chrome.storage.local.set({
      applyToNewTabs: applyToNew.checked
    });
  });
});
