// Ultra Transit Logistics LLC — shared site behaviour
const UTL = {
  email: "infoutldispatch@gmail.com",
  phone: "+923344550042",
  wa: "923344550042",
};

// Mobile nav
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav.main");
if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.textContent = open ? "✕" : "☰";
  });
  nav.querySelectorAll(".dd > button").forEach((b) =>
    b.addEventListener("click", () => {
      if (window.innerWidth <= 1080) b.parentElement.classList.toggle("open");
    })
  );
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.textContent = "☰";
    })
  );
}

// Reveal on scroll + count-up stats
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(e.target);
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

function countUp(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const t0 = performance.now();
  const dur = 1400;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Equipment selector → highlight the matching price card (click again to clear)
const eqs = document.querySelectorAll(".eq");
eqs.forEach((btn) =>
  btn.addEventListener("click", () => {
    const off = btn.classList.contains("active");
    eqs.forEach((b) => b.classList.toggle("active", !off && b === btn));
    document.querySelectorAll(".price").forEach((c) => {
      const match = c.dataset.keys === btn.dataset.key;
      c.classList.toggle("dim", !off && !match);
      c.classList.toggle("focus", !off && match);
    });
  })
);

// Back-to-top button
const toTop = document.querySelector(".to-top");
if (toTop) {
  addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 700), { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

// File upload labels
document.querySelectorAll(".up input[type=file]").forEach((inp) =>
  inp.addEventListener("change", () => {
    const box = inp.closest(".up");
    const f = inp.files[0];
    box.classList.toggle("has", !!f);
    box.querySelector(":scope > span").textContent = f ? "✓ " + (f.name.length > 18 ? f.name.slice(0, 16) + "…" : f.name) : "Tap to upload";
  })
);

// Preselect service from links like data-service="MC Leasing"
document.querySelectorAll("[data-service]").forEach((a) =>
  a.addEventListener("click", () => {
    const sel = document.querySelector("#contactForm select[name=Service]");
    if (sel) sel.value = a.dataset.service;
  })
);

// Forms: email delivery through FormSubmit, then redirect to thanks page.
document.querySelectorAll("form[data-utl]").forEach((form) => {
  form.action = `https://formsubmit.co/${UTL.email}`;
  form.method = "POST";
  if (form.querySelector("input[type=file]")) form.enctype = "multipart/form-data";
  const add = (name, value) => {
    const i = document.createElement("input");
    i.type = "hidden";
    i.name = name;
    i.value = value;
    form.appendChild(i);
  };
  add("_subject", `New website request: ${form.dataset.utl} — Ultra Transit Logistics`);
  add("_template", "table");
  add("_captcha", "false");
  add("_next", new URL("thanks.html", location.href).href);
  add("Form", form.dataset.utl);
  form.addEventListener("submit", () => {
    const b = form.querySelector("button[type=submit]");
    if (b) { b.disabled = true; b.textContent = "Sending…"; }
  });
});

// Load tracking → WhatsApp the dispatcher with the reference number
const trackForm = document.querySelector("#trackForm");
if (trackForm) {
  trackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ref = trackForm.ref.value.trim();
    if (!ref) return;
    const msg = `Hello Ultra Transit Logistics, I'd like a status update on load reference / BOL: ${ref}`;
    window.open(`https://wa.me/${UTL.wa}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });
}

// Year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
