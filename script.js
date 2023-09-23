// Get the HTML element with class "centerH1"
const centerH1 = document.querySelector(".centerH1");

// Array of image URLs
const imgArray = [
    "https://our-revolution.com/images/60a2bs0u/production/bbe04bf9114b9a68fb9ad00e50151043fc01bc8f-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/7713f372549c96dab072b3fd16d5cbcca72928b4-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/29586760513cc58215f802f593e6117c2d230249-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/51eb2601c8e9f0f131b2ca0e34fe06c8235dc399-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/e45abd72944a09caaa4366f50582551dfb76223c-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/a6dd04db188d3ead660669dfd040a6b0c1195a95-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/60290e589fd8ce3f50b0a655830f2df4ad5768cd-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/cc877cfbebb9b6fba91d93d538bc6b628b1ec640-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/bb2fe51cefaa421c69d106718abdf5e7a2ddcb9e-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/0b0ec011b2587cd89dc5875567ff40d879b30fff-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/5f723640bd904be1c6962a16b7a87d1382e1faa6-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/5d9f8c752b28df7dca4dfb9dcc325a5f59edd7ba-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/b7e08f2e2a878ce569deb1d2cff041103e2fb087-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/aca60287a3d15e27f04b0cfb489a8d0a4cf663c6-1542x2088.jpg?w=256&q=100&fit=clip&auto=format",
    "https://our-revolution.com/images/60a2bs0u/production/9dc03318c1b703bba98ba6e716d5bff8d6557bc8-1542x2088.jpg?w=256&q=100&fit=clip&auto=format"
];

// Throttling function to limit the mousemove event frequency
const throttling = (func, delay) => {
    let previousValue = 0;

    return (...args) => {
        let now = new Date().getTime();

        if (now - previousValue >= delay) {
            previousValue = now;
            return func(...args);
        }
    };
};

// Event listener for mousemove on "centerH1" with throttling
centerH1.addEventListener("mousemove", throttling((event) => {
    // Create a new div element
    let div = document.createElement("div");
    div.classList.add("imgs");

    // Position the div based on the mouse coordinates
    div.style.left = event.clientX - 90 + "px";
    div.style.top = event.clientY - 250 + "px";

    // Create an image element
    const img = document.createElement("img");

    // Randomly select an image from the array and set it as the image source
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    img.setAttribute("src", imgArray[randomIndex]);

    // Append the image to the div
    div.appendChild(img);

    // Append the div to the body
    document.body.appendChild(div);

    let rotate = 0;
    let prevRotate = 0;

    div.addEventListener("mousemove" , (event) => {

            rotate = event.clientX - prevRotate;
            prevRotate = event.clientX;
    
            gsap.to(div , {
                rotate : gsap.utils.clamp(-20 , 20 , rotate)
            });

        });

    // Create a timeline for animations
    let tl1 = gsap.timeline();

    // Animate the image
    tl1.to(img, {
        y: 0,
        ease: Expo.easeOut,
        duration : 0.8,
    }).to(img, {
        y: "100%",
        duration : 0.4,
        ease: Expo.easeIn
    });

    // Remove the div after a delay
    setTimeout(() => {
        div.remove();
    }, 1500);

}, 150));
