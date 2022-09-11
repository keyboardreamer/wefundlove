function done(){
    document.querySelector('.bar').innerHTML = `
        <img src='loadingGuy.png'>
        <h2>We are verifying your request :)</h2>
        <p>this step is to make sure that the fundraiser is not a scam</p>
    `
      setInterval(()=>{
        window.location.replace('https://keyboardreamer.github.io/wefundlove/index.html');
    },3000)
}
