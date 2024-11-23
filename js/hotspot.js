(() => {

    //variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
  //Data 
  
  const infoBoxes = [ 
    {
      title: "Noise Cancellation",
      text: "This feature help to make the sound better",
      image: "images/img3_0001.png"
    },
    {
      title: "Get perfect fit ear piece",
      text: "It is designed to get perfectly fit for ears ",
      image: "images/img4_0001.png"
    },
    {
      title: "High-Quality Sound",
      text: " Emphasize crisp audio, deep bass, and clear highs to enhance the listening experience, especially for music enthusiasts",
      image: "images/img5_0001.png"
    },
    {
      title: "Touch Controls",
      text: "Easy-to-use touch controls let users play/pause, skip tracks, and manage calls without reaching for their phone.",
      image: "images/img6_0001.png"
    },
    {
      title: "Sweat and Water Resistance",
      text: "With an IPX rating, earbuds become a great choice for workouts, rainy days, and active lifestyles, as they can withstand sweat and light moisture.",
      image: "images/img7_0001.png"
    },
    {
      title: "Quick Charge",
      text: "A 10-15 minute quick charge that provides hours of playtime is highly convenient for those on the go.",
      image: "images/img8_0001.png"
    },
    {
      title: "Find My Earbuds",
      text: "It has tracking features, making it easy to locate earbuds if misplaced, adding peace of mind",
      image: "images/img3_0001.png"
    }
  ]
  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);
  
      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      image = document.createElement('img');
        image.src = infoBox.image;
        image.style.width = "80%";
  
      selected.appendChild(image);
      selected.appendChild(title);
      selected.appendChild(text);
    })
  }
  
  //call the function to load data
  function modelLoaded() {
    loadInfo();
  }
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event listeners
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  })();
  
  