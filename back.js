// call the api
// to display it in web page
// to arrange it well!

async function apiCall() {
  const data = await fetch(`https://webtool-server.onrender.com/getback`);
  const res = await data.json();
  console.log(res);

  res.map((item) => {
    const itemContainer = document.querySelector(".item_exercise");
    const loader = document.querySelector(".loader");
    const item_contain = document.querySelector(".item_contain2");

    const imgg = document.createElement("img");
    imgg.src = item.image;
    itemContainer.appendChild(imgg);

    loader.style.display = "none";
    item_contain.style.display = "block";

    item_contain.style.gridTemplateColumns = "auto auto auto";

    imgg.style.padding = `20px`;
    imgg.style.width = "32vw";
    imgg.style.borderRadius = "40px";

    const mediaEvent = () => {
      if (imgg.style.width == "30vw") {
            imgg.style.width = "40vw";
      } else {
            imgg.style.width = "30vw";
      }
    };

    const widthSize = window.matchMedia("(max-width: 1090px)");

    mediaEvent(mediaEvent);

    widthSize.addEventListener("change", mediaEvent);
  });
}

apiCall();
