/**
 * Return one current tab
 * @returns {Promise<object>}
 */

const getCurrentTab = async () => {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true})
    return tabs[0]
};