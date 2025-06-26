document.addEventListener('DOMContentLoaded', async function() {
    // Get current tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Check if current URL is arXiv
    const isArxivPage = tab.url && tab.url.includes('arxiv.org/abs/');
    
    if (isArxivPage) {
        showArxivContent(tab.url);
    } else {
        showNotArxivContent();
    }
    
    // Load saved language preference
    loadLanguagePreference();
    
    // Set up event listeners
    setupEventListeners();
});

function showArxivContent(url) {
    document.getElementById('arxiv-content').style.display = 'block';
    document.getElementById('not-arxiv').style.display = 'none';
    
    // Extract paper ID from URL
    const paperId = extractPaperId(url);
    document.getElementById('paper-id').textContent = paperId;
}

function showNotArxivContent() {
    document.getElementById('arxiv-content').style.display = 'none';
    document.getElementById('not-arxiv').style.display = 'block';
}

function extractPaperId(url) {
    const match = url.match(/arxiv\.org\/abs\/(.+?)($|\?|#)/);
    return match ? match[1] : '';
}

async function loadLanguagePreference() {
    try {
        const result = await chrome.storage.sync.get(['defaultLanguage']);
        const defaultLanguage = result.defaultLanguage || 'en';
        document.getElementById('language').value = defaultLanguage;
    } catch (error) {
        console.error('Error loading language preference:', error);
        document.getElementById('language').value = 'en';
    }
}

function setupEventListeners() {
    // Redirect button
    document.getElementById('redirect-btn').addEventListener('click', handleRedirect);
    
    // Language selector
    document.getElementById('language').addEventListener('change', saveLanguagePreference);
    
    // Options link
    document.getElementById('options-link').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.runtime.openOptionsPage();
    });
}

async function handleRedirect() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const paperId = extractPaperId(tab.url);
        const language = document.getElementById('language').value;
        
        if (!paperId) {
            console.error('Could not extract paper ID');
            return;
        }
        
        const alphaxivUrl = buildAlphaxivUrl(paperId, language);
        
        // Open in new tab
        await chrome.tabs.create({ url: alphaxivUrl });
        
        // Close popup
        window.close();
    } catch (error) {
        console.error('Error during redirect:', error);
    }
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

async function saveLanguagePreference() {
    try {
        const language = document.getElementById('language').value;
        await chrome.storage.sync.set({ defaultLanguage: language });
    } catch (error) {
        console.error('Error saving language preference:', error);
    }
} 