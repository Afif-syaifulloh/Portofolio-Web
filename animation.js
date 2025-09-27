const skills = document.querySelectorAll(".skill");
const message = document.getElementById("finalMessage");
let remaining = skills.length;

skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    // tambahkan class animasi keluar
    skill.classList.add("fadeOutUp");

    // tunggu animasi selesai dulu baru hilang
    skill.addEventListener(
      "animationend",
      () => {
        skill.style.display = "none";
        remaining--; // kurangi jumlah skill

        // kalau semua skill sudah hilang → tampilkan pesan
        if (remaining === 0) {
          message.classList.add("show");
        }
      },
      { once: true }
    );
  });
});

 let scrollBtn = document.getElementById("scrollTopBtn");
 let projectSection = document.getElementById("project");

 window.addEventListener("scroll", () => {
   let projectTop = projectSection.offsetTop; // posisi awal section project
   let scrollY = window.scrollY; // posisi scroll sekarang

   if (scrollY >= projectTop) {
     scrollBtn.style.display = "block"; // munculin tombol
   } else {
     scrollBtn.style.display = "none"; // sembunyiin tombol
   }
 });

 scrollBtn.onclick = function () {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 };

 