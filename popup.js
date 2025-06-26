document.addEventListener('DOMContentLoaded', async function() {
    // Get current tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Check if current URL is arXiv (both abs and pdf pages)
    const isArxivPage = tab.url && (tab.url.includes('arxiv.org/abs/') || tab.url.includes('arxiv.org/pdf/'));
    
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
    // Support both /abs/ and /pdf/ URLs
    const absMatch = url.match(/arxiv\.org\/abs\/(.+?)($|\?|#)/);
    const pdfMatch = url.match(/arxiv\.org\/pdf\/(.+?)($|\?|#)/);
    
    if (absMatch) {
        return absMatch[1];
    } else if (pdfMatch) {
        return pdfMatch[1];
    }
    
    return '';
}

async function loadLanguagePreference() {
    try {
        const result = await chrome.storage.sync.get(['defaultLanguage']);
        const defaultLanguage = result.defaultLanguage || 'en';
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.value = defaultLanguage;
        }
    } catch (error) {
        console.error('Error loading language preference:', error);
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.value = 'en';
        }
    }
}

function setupEventListeners() {
    // Redirect button
    const redirectBtn = document.getElementById('redirect-btn');
    if (redirectBtn) {
        redirectBtn.addEventListener('click', handleRedirect);
    }
    
    // Language selector
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', saveLanguagePreference);
    }
    
    // Options link
    const optionsLink = document.getElementById('options-link');
    if (optionsLink) {
        optionsLink.addEventListener('click', function(e) {
            e.preventDefault();
            chrome.runtime.openOptionsPage();
        });
    }
}

async function handleRedirect() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const paperId = extractPaperId(tab.url);
        const languageSelect = document.getElementById('language');
        const language = languageSelect ? languageSelect.value : 'en';
        
        if (!paperId) {
            console.error('Could not extract paper ID from URL:', tab.url);
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
        const languageSelect = document.getElementById('language');
        if (!languageSelect) {
            console.error('Language selector not found');
            return;
        }
        
        const language = languageSelect.value;
        await chrome.storage.sync.set({ defaultLanguage: language });
    } catch (error) {
        console.error('Error saving language preference:', error);
    }
} 