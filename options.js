document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    setupEventListeners();
});

function loadSettings() {
    chrome.storage.sync.get({
        defaultLanguage: 'en',
        showFloatingButton: true,
        openInNewTab: false
    }, function(items) {
        document.getElementById('defaultLanguage').value = items.defaultLanguage;
        document.getElementById('showFloatingButton').checked = items.showFloatingButton;
        document.getElementById('openInNewTab').checked = items.openInNewTab;
        
        updatePreviewUrl(items.defaultLanguage);
    });
}

function setupEventListeners() {
    // Save button
    document.getElementById('saveBtn').addEventListener('click', saveSettings);
    
    // Language selector change
    document.getElementById('defaultLanguage').addEventListener('change', function() {
        updatePreviewUrl(this.value);
    });
}

function saveSettings() {
    const settings = {
        defaultLanguage: document.getElementById('defaultLanguage').value,
        showFloatingButton: document.getElementById('showFloatingButton').checked,
        openInNewTab: document.getElementById('openInNewTab').checked
    };
    
    chrome.storage.sync.set(settings, function() {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
        
        // Update content scripts with new settings
        updateContentScripts(settings);
    });
}

function updatePreviewUrl(language) {
    const baseUrl = 'https://www.alphaxiv.org';
    let path;
    
    switch (language) {
        case 'zh':
            path = '/zh/overview';
            break;
        case 'ja':
            path = '/ja/overview';
            break;
        case 'ko':
            path = '/ko/overview';
            break;
        default:
            path = '/overview';
    }
    
    document.getElementById('previewUrl').textContent = `${baseUrl}${path}/[paper-id]`;
}

function updateContentScripts(settings) {
    // Send message to all tabs to update floating button visibility
    chrome.tabs.query({url: "https://arxiv.org/abs/*"}, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.tabs.sendMessage(tab.id, {
                action: 'updateSettings',
                settings: settings
            }).catch(error => {
                // Ignore errors for tabs that don't have the content script loaded
                console.log('Could not send message to tab:', tab.id);
            });
        });
    });
} 