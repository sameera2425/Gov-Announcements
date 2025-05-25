document.addEventListener('DOMContentLoaded', () => {
    const summarizeButton = document.getElementById('summarize-btn');
    const newsContainer = document.querySelector('.news-container');

    if (summarizeButton && newsContainer) {
        summarizeButton.addEventListener('click', () => {
            // Find the existing summary box
            let summaryBox = newsContainer.querySelector('.summary-box');

            if (summaryBox) {
                // If the box exists, toggle its display
                if (summaryBox.style.display === 'none') {
                    summaryBox.style.display = 'block';
                } else {
                    summaryBox.style.display = 'none';
                }
            } else {
                // If the box does not exist, create and append it (defaulting to visible)
                summaryBox = document.createElement('div');
                summaryBox.classList.add('summary-box');
                summaryBox.innerHTML = `
                    <h4>Summary:</h4>
                    <ul>
                        <li>Key point one about the announcement.</li>
                        <li>Key point two with important details.</li>
                        <li>Key point three summarizing the main takeaway.</li>
                    </ul>
                `;

                // Insert the summary box after the meta-bottom section
                const metaBottom = newsContainer.querySelector('.meta-bottom');
                if (metaBottom) {
                    metaBottom.parentNode.insertBefore(summaryBox, metaBottom.nextSibling);
                }
            }
        });
    }
}); 