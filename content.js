// Content script for arXiv pages
(function() {
    'use strict';
    
    // Only run on arXiv abstract pages
    if (!window.location.href.includes('arxiv.org/abs/')) {
        return;
    }
    
    // Create floating button
    createFloatingButton();
    
    function createFloatingButton() {
        // Check if button already exists
        if (document.getElementById('alphaxiv-float-btn')) {
            return;
        }
        
        const button = document.createElement('div');
        button.id = 'alphaxiv-float-btn';
        button.innerHTML = `
            <div class="alphaxiv-btn-content">
                <span class="alphaxiv-icon">📚</span>
                <span class="alphaxiv-text">Go to Blog</span>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #alphaxiv-float-btn {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 50px;
                padding: 12px 20px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
                transition: all 0.3s ease;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
                font-weight: 500;
                backdrop-filter: blur(10px);
            }
            
            #alphaxiv-float-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
                background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
            }
            
            .alphaxiv-btn-content {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .alphaxiv-icon {
                font-size: 16px;
            }
            
            @media (max-width: 768px) {
                #alphaxiv-float-btn {
                    top: auto;
                    bottom: 20px;
                    right: 20px;
                    padding: 10px 16px;
                }
                
                .alphaxiv-text {
                    display: none;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(button);
        
        // Add click handler
        button.addEventListener('click', handleButtonClick);
    }
    
    async function handleButtonClick() {
        try {
            // Get saved preferences
            const result = await chrome.storage.sync.get(['defaultLanguage', 'openInNewTab']);
            const language = result.defaultLanguage || 'en';
            const openInNewTab = result.openInNewTab !== false; // default to true
            
            // Extract paper ID
            const paperId = extractPaperId(window.location.href);
            if (!paperId) {
                console.error('Could not extract paper ID');
                return;
            }
            
            // Build AlphaXiv URL
            const alphaxivUrl = buildAlphaxivUrl(paperId, language);
            
            // Open based on user preference
            if (openInNewTab) {
                window.open(alphaxivUrl, '_blank');
            } else {
                window.location.href = alphaxivUrl;
            }
        } catch (error) {
            console.error('Error opening AlphaXiv:', error);
        }
    }
    
    // Listen for settings updates from options page
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'updateSettings') {
            updateFloatingButton(message.settings);
        }
    });
    
    function updateFloatingButton(settings) {
        const button = document.getElementById('alphaxiv-float-btn');
        if (button) {
            if (settings.showFloatingButton) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        }
    }
    
    function extractPaperId(url) {
        const match = url.match(/arxiv\.org\/abs\/(.+?)($|\?|#)/);
        return match ? match[1] : '';
    }
    
    function buildAlphaxivUrl(paperId, language) {
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
        
        return `${baseUrl}${path}/${paperId}`;
    }
})(); 