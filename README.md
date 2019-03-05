# scrape


This is my Mongo Scraper application I built for the 20th week of my Coding Bootcamp.

With cheerio, we'd scrape each website looking for titles, links, and summaries of articles displayed on the main page of a website. I chose Kotaku.com, because I like nerdy stuff.

Loading cheerio into the variable '$', we loaded the reactionary usage of cheerio into all our Jquery functions, letting it act for every click. Using express to establish routes, the axios call was made and the information would be displayed back on the root public page once the 'Start Scraping' button had been hit. 

I targeted the article and h2 tags for each request, finding the children properties of a href for links and title was my next step, which was achieved easily. Targeting the summary, however, was not. I used '$("div.entry-summary").children("p").text()' to find the specific tags, as the entry-summary class wasn't able to be found from the simple trickle down. I was only able to target the div.entry-summary by replacing the 'this' pointer I had to the object I had established, but it would also pull each iteration of that tag being used for each article, since it was in a loop. I wasn unsure how to find the specific tag I needed, and played with many different usages of arguments and children() or siblings() functions, but I was beaten this time. 

My next challenge came in displaying routes for notes and saved articles. Fortunately, Phil helped me save the 