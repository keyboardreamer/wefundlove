var http = require('http');
var fs = require('fs');
var database = require('./information.js')
var data = database.info()

console.log(data)

var title = ''

var x = 0;

const comments = [`朋友挺住啊 
希望你加油 遇到这种情况 我们都会支持你的`,`希望你的家人好起來，也希望你身體健康`,`shjlsdbcaaaaaaaaaaaaa`,`You are not alone. Everyone is with you. Stay strong`,`Stay strong. Prayers for your well being `]
console.log('hihi')

http.createServer(function(req,res){

        data.forEach(function(dat){
          html =   `
          <!DOCTYPE html>
            <head>
              <meta name="keywords" content="fundraising, teenager, money, donate, charity">
              <title>${dat.title} - We Fund Love</title>
          
              <link rel="stylesheet" href="../fundraiserPage.css">
              <link rel="stylesheet" href="../style.css"> 
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
              <link rel="icon" type="image/x-icon" href="../favicon.png">
          
            </head>
            <body>
          
              <nav class="flex nav-flex">
                <div class="flex flex-left">
                  <a href='../index.html'>
                    <img class='nav_logo' src="../WeFundLove.png">
                
                  </a>
                </div>
          
                <div class="flex flex-middle">
                  <div class="search-bar flex">
                    <button onclick='search()' class="searchBtn">🔍</button>
                    <input class="search-input" placeholder="search">
                  </div>  
                </div>
          
                <div class="flex flex-right">
                  <a href="../usersupport.html">Learn more</a>
                  <a>Setting</a>
                  <a href="../login.html">Account</a>
                  <a class="nav-createBtn" href='../create.html'>Create</a>
                </div>
              </nav>
          
            
              <main class="main">
                  <div class="banner">
                      <img class="banner_img" src="${dat.thumbnail}">
                      <div class="donStatus">
                           <h1>${Math.round((dat.current/dat.goal)*100)}%</h1>
                           <p>${dat.current} out of ${dat.goal} goal</p>
                           <button class="bigBtn donateBtn" onclick='pay()'>donate</button>
                      </div>
                  </div>
                  <h1>${dat.title}</h1>
                  <p>${dat.description}</p>
          
          
                  <div class="status flex">
                    <button class="stateBtn moneyBtn">
                      <i class="fa-solid fa-dollar-sign"></i>
                      ${dat.goal} Usd
                    </button>
          
                    <button class="stateBtn likeBtn" onclick='like()'>
                      <i class="fa-regular fa-heart"></i>
                      ${dat.like}
                    </button>
        
                    
                    <button class='stateBtn shareBtn'>
                      <i class="fa-solid fa-share"></i>
                      share
                    </button>
  
                    <button class="bigBtn donateAltBtn donateBtn" onclick='pay()'>donate</button>
                  </div>
          
                  
                  <h3>Comment</h3>
                  <p><b>user${Math.floor(Math.random()*1000)}</b> ${comments[Math.floor(Math.random()*comments.length)]}</p>
                  <p><b>user${Math.floor(Math.random()*1000)}</b> ${comments[Math.floor(Math.random()*comments.length)]}</p>
                  <p><b>${dat.creator}</b> hey hey hey thankyou for your comments and like!</p>
                  <h3>Update</h3>
                  <ul>
                    <li>This fundraiser had meet ${Math.round((dat.current/dat.goal)*100)}% of its goal ${Math.floor(Math.random()*30)} days ago</li>
                    <li>The fundraiser was created ${Math.floor(Math.random()*500)} days ago</li>
                  </ul>
                  <h3>Contact</h3>
                  <p>Email: not provided</p>
                  <p>Phone Number: not provided</p>
              </main>
          
              <div id="hover">
              <div id="smart-button-container">
                <div style="text-align: center;">
                  <div id="paypal-button-container"></div>
                </div>
              </div>
            <script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
            <script>
              function initPayPalButton() {
                paypal.Buttons({
                  style: {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'paypal',
                    
                  },
          
                  createOrder: function(data, actions) {
                    return actions.order.create({
                      purchase_units: [{"amount":{"currency_code":"USD","value":1}}]
                    });
                  },
          
                  onApprove: function(data, actions) {
                    return actions.order.capture().then(function(orderData) {
                      
                      // Full available details
                      console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          
                      // Show a success message within this page, e.g.
                      const element = document.getElementById('paypal-button-container');
                      element.innerHTML = '';
                      element.innerHTML = '<h3>Thank you for your payment!</h3>';
          
                      // Or go to another URL:  actions.redirect('thank_you.html');
                      
                    });
                  },
          
                  onError: function(err) {
                    console.log(err);
                  }
                }).render('#paypal-button-container');
              }
              initPayPalButton();
            </script>
            </div>
            
              <footer class="footer flex">
                <div class="flex-right">
                  <a>Contact us</a>
                  <a>Need help?</a>
                  <a>Cookie policies</a>
                </div>
          
                <div class="flex-right flex">
                  <a class="flex">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a class="flex" href="mailto:wefundlove@proton.me">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </footer>
          
              <script src='../fundraiser.js'></script>
              <script src='../info.js'></script>
            </body>
          </html>`

          fs.writeFile(`${dat.title}.html`,`${html}`,function(err){
            if (err) throw err;
        });
        }

        )
    }


).listen(8080);
