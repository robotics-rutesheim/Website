document.addEventListener("DOMContentLoaded", loadContent);

async function loadContent() {
    // Load template
    const templateResponse = await fetch('./content/news-template.html');
    const template = await templateResponse.text();
    console.log(template);
    // Load news data
    const newsResponse = await fetch('./content/news_list.json');
    const newsData = await newsResponse.json();
    newsData.sort(function(a,b){
        return new Date(b.Date) - new Date(a.Date);
      });
    // Process each news item
    newsData.forEach(news => {
        let newsHtml = template
            .replace('{{title}}', news.Title)
            .replace('{{description}}', news.Description)
            .replace('{{date}}', news.Date);

        // Handle image
        const imageHtml = news.Image ? `
            <div>
                <img src="${news.Image}" alt="News Image">
            </div>` : '';
        newsHtml = newsHtml.replace('{{image}}', imageHtml);
        // Create element and insert into DOM
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newsHtml;
        document.getElementById('news_content').appendChild(tempDiv);
    });
}