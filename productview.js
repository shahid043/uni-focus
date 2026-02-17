
  const newFeatures = [
    "2MP Quad Light Technology",
    "Full Color Night Vision",
    "Smart Human Detection",
    "IP67 Weatherproof",
    "H.265+ Compression",
    "PoE Supported",
    "Mobile App Remote Access"
  ];



  const featureList = document.getElementById("key-features");

  featureList.innerHTML = "";

  newFeatures.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });
