     apikey = '7fd233f02781c811e3bc689059ca0d59';
    url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;


     const contentBody =document.querySelector('.content-body')
     const mainContentbody = document.querySelector('main-contentbody')
     const image = document.querySelector('.image')
     const info = document.querySelector('.info')
     const searchArticle = document.querySelector('.search-article')
  //  console.log(searchArticle)
 
    
  


   
    function loader(){
         
        const load = document.createElement('div')
        load.classList.add('loader')
        contentBody.append(load)
      setTimeout(()=>{
        getNews()
        load.remove()
       
      },5000)
    }
     loader()


   const getNews = async()=>{
       try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Network response was not ok :${response.statusText}`)
        }
       const data = await response.json()
        console.log(data)
          const  article =data.articles
          console.log(article)
       
          //iterate over array of object
           article.forEach((article, index) => {
            // Creating dom elements for each one iterate
            const cards = document.createElement('div')
            cards.classList.add('card')

            const img = document.createElement('img')
            img.classList.add('img')

           const dateTime = document.createElement('p')
           dateTime.classList.add('date')

           const link = document.createElement('a')
           link.classList.add('title')

           const span = document.createElement('span')
           span.classList.add('title')
           const desc = document.createElement('p')
           desc.classList.add('description')
           img.src = article.image
           cards.append(img)
           dateTime.textContent =article.publishedAt

          //  span.textContent = article.title
           const articleURL= article.url
           link.href = articleURL
           link.textContent = article.title

           cards.append(dateTime)
           cards.append(span)
           cards.append(link)
        
           desc.textContent =article.description;
           cards.append(desc)

          
           contentBody.append(cards)
     });
       } catch(error){
        console.log('There was a problem with fetch')
       }
     
   }



searchArticle.addEventListener('click',()=>{
    alert('Still in develepment search engine')
})
 
