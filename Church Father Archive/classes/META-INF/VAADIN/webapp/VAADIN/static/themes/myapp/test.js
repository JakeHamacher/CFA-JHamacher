// Function to highlight search terms using CSS
function highlightSearchResults(query) {
    // Clear previous highlights
    document.querySelectorAll('.highlight').forEach(function(el) {
        el.classList.remove('highlight');
    });

    if (!query) return; // Return early if query is empty

    // Search and highlight matching text in the entire document
    const bodyContent = document.body;
    
    // Regex to match the query (case-insensitive)
    const regex = new RegExp('(' + query + ')', 'gi');

    // Function to highlight matching text
    function highlightText(node) {
        if (node.nodeType === 3) { // If it's a text node
            const matches = node.textContent.match(regex);
            if (matches) {
                const span = document.createElement('span');
                span.className = 'highlight';
                span.innerHTML = node.textContent.replace(regex, '<span class="highlight">$1</span>');
                node.parentNode.replaceChild(span, node);
            }
        } else if (node.nodeType === 1 && node.childNodes) {
            for (let child of node.childNodes) {
                highlightText(child);
            }
        }
    }

    highlightText(bodyContent);
}
