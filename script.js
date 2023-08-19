const quote = document.getElementById("quote");
const author = document.getElementById("author");

  let arr = [
    {
      quote: "It ain't whatcha write, it's the way atcha write it.",
      author: "—Jack Kerouac, WD",
    },
    {
      quote: "“Not a wasted word. This has been a main point to my literary thinking all my life.”",
      author: "—Hunter S. Thompson",
    },
    {
      quote:"“The freelance writer is a man who is paid per piece or per word or perhaps.”",
      author:"—Robert Benchley"
    },
    {
      quote:"“If a nation loses its storytellers, it loses its childhood.”",
      author:"—Peter Handke"
    },
    {
      quote:"“To defend what you've written is a sign that you are alive.”",
      author:"—William Zinsser, WD"

    },
    {
      quote:"“If I had not existed, someone else would have written me, Hemingway, Dostoyevsky, all of us.”",
      author:"—William Faulkner"
    },
    {
      quote:"“For your born writer, nothing is so healing as the realization that he has come upon the right word.”",
      author:"—Catherine Drinker Bowen"
    },
    {
      quote:"“Write. Rewrite. When not writing or rewriting, read. I know of no shortcuts.”",
      author:"—Allegra Goodman"
    },
    {
      quote:"“There are no laws for the novel. There never have been, nor can there ever be.”",
      author:"—Doris Lessin"
    },
    {
      quote:"“Style means the right word. The rest matters little.”",
      author:"—Jules Renard      "
    },
    {
      quote:"“I don't need an alarm clock. My ideas wake me.”",
      author:"—Ray Bradbury, WD "
    },
    {
      quote:"“Let the world burn through you. Throw the prism light, white hot, on paper.”",
      author:"—Ray Bradbury, WD "
    },
    {
      quote:"“I don't need an alarm clock. My ideas wake me.”",
      author:"—Ray Bradbury, WD "
    },
    {
      quote:"“Let the world burn through you. Throw the prism light, white hot, on paper.”",
      author:"—Ray Bradbury, WD "
    },
    {
      quote:"“Writers are always selling somebody out.”  ",
      author:"—Joan Didion"
    },
    {
      quote:"I think all writing is a disease. You can't stop it.”",
      author:"—William Carlos Williams      "
    },

  ];
  quote.innerText=arr[0].quote;
  author.innerText=arr[0].author;
  let i=1;
const nextQuote=()=>{
  quote.innerText=arr[i].quote;
  author.innerText=arr[i].author;
  i++;
  
}