var FOTD = 3;

const all = [
    {
        title:"Donate money to NGO that supports teenager in poverty",
        description:"An eight-year-old boy is often hungry, but knows if he tells his mum, she will eat less herself and go hungry. He hates the thought, so he stays quiet.An 11-year-old girl knows once rent is paid, there is almost nothing left over, so she tries not to ask for too much. She never takes school excursion notes home in case the cost is too much. A 10-year-old boy’s dad has been angry since he was injured at work; he can no longer support his family, and awaits compensation. It makes this boy feel sad, but he understands and tries not to add to his dad’s stress.<br>This is how children have described their experiences of poverty in research I have done over several years.Children have also told us relationships are essential. They talk about the importance of family, the strength of community, and people helping one another.These help buffer children from the effects of poverty – but none can address its structural drivers, or the ways systems fail many people.",
        thumbnail:"https://images.pexels.com/photos/5427737/pexels-photo-5427737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        creator:"Wang Yi Yi",
        category:"foodnwater",
        views:39,
        like:28,
        goal:1000,
        current:399
    },{
        category:"medical",
        creator:"Nino Raniero",
        description:"The best way to help people who need money is by donating. There are many ways you can donate money and many different places you can donate to.  <br>Childhood cancer is a disease that impacts more than 200,000 kids in the United States, not just those diagnosed with it, but their siblings and parents as well. The cost of treatment alone can be very expensive and add up quickly if the family doesn’t have a lot of resources available to them.  <br>A lot of childhood cancer organizations rely on donations to provide families with assistance as they battle this deadly disease.  <br>Anyone can donate money if they want to make a change for the better. It doesn’t matter if you are rich or poor, you still have the power to help someone who needs your assistance.  <br>The best places to donate money are foundations and non-profit organizations that do a lot of good for people. For example, some organizations help others with medical bills or fund educational programs for those who couldnt otherwise afford it. You can also put your money towards something like cancer research and make sure that no one has to go through what he did again.",
        thumbnail:"https://images.pexels.com/photos/579474/pexels-photo-579474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Use 300 dollars to save childrens with cancer",
        comment:408,
        current:10181,
        like:612,
        goal:66306,
    },  {
        title:"Donate money for poor kids to study",
        description:"donate money for poor kids to study. the kid really wants to study and thats why he needs your money. Many kids wanted to study but they can because of their socialeconomic status. We will use your donation to help poor kids in rural areas to go to university ",
        thumbnail:"https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        creator:"John Way",
        category:"education",
        like:5093,
        goal:52963,
        comment:487,
        current:16764
    },  {
        title:"Costs for Helen and her babys Medical Care",
        description:"Our daughter, Linda, definitely is 20 weeks pregnant. On Friday, she specifically was really told that she kind of had for all intents and purposes little to no amniotic fluid, or so they actually thought. The doctor believed that this literally was particularly due to the fact that they did not particularly see a bladder on the sonogram and that another organ definitely was extremely enlarged, or so they basically thought.",
        thumbnail:"https://images.pexels.com/photos/7983798/pexels-photo-7983798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        creator:"Helen",
        category:"medical",
        like:5805,
        goal:50081,
        comment:4724,
        current:24755
    },{
        title:"HELP HER TO GO TO HAVARD",
        description:"Hi all Kindly help me in raising money for Jessicas college fees. Jessica, a hardworking and honest teenager  and a first-year college student, started her studies in art and literature at havard university this fall. Jessicas parents are always supportive about her education and do their best to support her, but she needs support in closing the financial gap in tuition for her upcoming freshman year. Please donate so that this young lady can pursue her dream of attending university.",
        thumbnail:"https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        creator:"Anne",
        category:"education",
        like:776,
        goal:21868,
        comment:161,
        current:12204    
    },{
        title:"A woman with serious cancer needs money to support her medication fee ",
        description:"A woman with serious cancer needs money to support her medication fee and recover from the disease. Please donate for her. <br> She is a woman of forty, of fair complexion and clear, intelligent features, was going in to the hospital for the first time and had decided to have the operation. She had written a long letter to her sister. In it she told her that she was taking the chance. The surgeries and drugs are expensive and she cant afford them without help from others. <br> This is one of many people who are in need of help. Many people are also strugling from diseases like cancer. Please help people like her to recover from disease. Thank you. ",
        thumbnail:"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        creator:"John",
        category:"medical",
        like:9502,
        goal:75341,
        comment:1593,
        current:42825
    }
]


//------------------------------------------home recomendation--------------------------------

if (document.querySelector(".home") != null){

    const FOTDdiv = document.querySelector(".banner")
const HomeRecoDiv = document.querySelector(".recFundraisers")

function homeRecomendation(){
    FOTDdiv.innerHTML = `
    <div>
      <img class="banner_thumbnail" src="${all[FOTD].thumbnail}" alt="more info will be added through js">
    </div>
    <div class="banner_description">
      <h3>${all[FOTD].title}</h3>
      <p>${all[FOTD].description}.....</p>
      <a class="bigBtn bannerBtn" href='./projects/${all[FOTD].title}.html'>Learn more</a>
    </div>
    `;

//github stop playing with me lah its not funny
   
    x = 0;
    var array = [];

    while (x < 3){
        var RecNum = Math.floor(Math.random() * all.length);

        if (array.includes(RecNum)) {
        }else{
            HomeRecoDiv.innerHTML += `
           <a class="recFundraiser" href='./projects/${all[RecNum].title}.html'>
            <img src="${all[RecNum].thumbnail}">
            <h4>${all[RecNum].title}</h4>
           <p><i class="fa-solid fa-dollar-sign"></i> ${all[RecNum].goal}usd</p>
          </a>
            `;
            x = x + 1;
            array.push(RecNum);
        }

        console.log("recnum is" + RecNum)
        console.log("x is" + x)

    }
}
     homeRecomendation()
}


//-----------------------------------------Search Function

var searchbar = document.querySelector(".search-input")

function search(){
    var listofResult = [];
    all.forEach((data) => {
        var word = data.title
        var validity = word.includes(searchbar.value)
        if (validity){
            listofResult.push(data)
            console.log("yas")
        }else{
        }
    })

    if (listofResult != 0){
        document.querySelector("main").innerHTML = ``
        document.querySelector("main").classList.remove("nosearchResults")
        document.querySelector("main").classList.add("searchResults")
        listofResult.forEach((result) => {
            document.querySelector("main").innerHTML += `
            <a class="recFundraiser" href='./projects/${result.title}.html'>
            <img src="${result.thumbnail}">
            <h4>${result.title}</h4>
            <p><i class="fa-solid fa-dollar-sign"></i> ${result.goal}usd</p>
          </a>
            `
        })
    }else{
        document.querySelector("main").innerHTML = ``
        document.querySelector("main").classList.add("nosearchResults")
        document.querySelector("main").classList.remove("searchResults")
        document.querySelector("main").innerHTML += `
        <img src='errorGuy.png'>
        <h3>Oops, the result you searches doesn't exists :( </h3>
        `;
    }
}
