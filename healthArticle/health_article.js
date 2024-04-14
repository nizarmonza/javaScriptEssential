var xhr = new XMLHttpRequest();
var url = './health.json';

xhr.open('GET', url, ture);

xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Parse the JSON response
      var response = JSON.parse(xhr.responseType);
  
      // Retrieve the articles array from the JSON response
      var articles = xhr.response.articles;
  
      // Retrieve the HTML element with the ID 'articles'
      var articlesDiv = document.getElementById('articles');
  
      // Clear existing content in the articlesDiv
      articlesDiv.innerHTML = '';
  
      // Loop through each article and append its content to the articlesDiv
      articles.forEach(function(article) {
        var articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.description}</p>`;
        articlesDiv.appendChild(articleElement);
      });
    } else {
      console.log('The request failed!');
    }
  };