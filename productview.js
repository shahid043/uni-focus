
  const newFeatures = [
    "2MP Quad Light Technology",
    "Full Color Night Vision",
    "Smart Human Detection",
    "IP67 Weatherproof",
    "H.265+ Compression",
    "PoE Supported",
    "Mobile App Remote Access"
  ];

  const toggleBtn=document.getElementById("menu-btn");
  const sidebar=document.getElementById("sidebar");
  const overlay=document.getElementById("overlay");


  toggleBtn.addEventListener("click",() => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

    overlay.addEventListener("click", () =>{
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });


  const featureList = document.getElementById("key-features");

  featureList.innerHTML = "";

  newFeatures.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });
