let currentIndex = 0;

const showSlide = (index) => {
  const sliders = document.getElementById("sliders");
  const totalSliders = sliders.children.length;

  if (index >= totalSliders) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSliders - 1;
  } else {
    currentIndex = index;
  }

  sliders.style.transform = `translateX(${-currentIndex * 100}%)`;
};
const prevSlide = () => {
  showSlide(currentIndex - 1);
};

const nextSlide = () => {
  showSlide(currentIndex + 1);
};

/*

        লজিকটা খুব সিম্পল 

    প্রথমে একটা গ্লোবাল ভ্যারিয়েবল `currentIndex = 0` নেওয়া হয়েছে, যাতে শুরুতে প্রথম স্লাইড দেখায়।

    👉 যখন **Next button** এ ক্লিক করা হয়, তখন index এক এক করে বাড়ে।
    👉 যখন **Prev button** এ ক্লিক করা হয়, তখন index এক এক করে কমে।

    এই বাড়ানো/কমানো value গুলো `showSlide()` ফাংশনে পাঠানো হয়।

    তারপর ফাংশনের ভিতরে:

    * মোট কয়টা slide আছে (`totalSliders`) সেটা বের করা হয়
    * যদি index বেশি হয়ে যায় → আবার 0 তে চলে আসে
    * যদি index 0 এর কম হয় → শেষ slide এ চলে যায়

    শেষে `translateX(-index * 100%)` দিয়ে slider move করানো হয়।

   অর্থাৎ:
    button click → index change → check (limit) → update → slide move


*/
