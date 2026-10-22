/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { products, categories } from "./data/products";
import { business } from "./data/business";
import logo from "./assets/logo.png";
import heroImg from "./assets/hero-img.jpg";
import "./App.css";

const WA = `https://wa.me/${business.phoneHref.replace("+", "")}`;
const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
];
const money = (n) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
    n,
  );
const wa = (message) => `${WA}?text=${encodeURIComponent(message)}`;

function Header({ count }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <>
      <div className="announce">
        {business.serviceArea}
      </div>
      <header className="header">
        <Link className="brand" to="/">
          <img
            className="brand-image "
            src={logo}
            alt="Joy's Native Pot logo"
          />
        </Link>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {links.map((x) => (
            <Link
              key={x.href}
              className={loc.pathname === x.href ? "active" : ""}
              to={x.href}
            >
              {x.label}
            </Link>
          ))}
          <Link className="cart-link" to="/cart">
            Cart <b>{count}</b>
          </Link>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link className="brand light" to="/">
            <img
              className="brand-image"
              src={logo}
              alt="Joy's Native Pot logo"
            />
            <span>
              Joy’s Native Pot<small>AUTHENTIC NIGERIAN CUISINE</small>
            </span>
          </Link>
          <p>{business.description}</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link to="/menu">Our menu</Link>
          <Link to="/about">Our story</Link>
          <Link to="/catering">Catering</Link>
        </div>
        <div>
          <strong>Find us</strong>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram {business.instagramHandle}
          </a>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href={business.reviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            Leave a review
          </a>
        </div>
        <div>
          <strong>Edmonton & area</strong>
          <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
          <a href={WA} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
          <span>
            {business.serviceArea}
          </span>
          <a href={business.googleUrl} target="_blank" rel="noreferrer">Google Business Profile</a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Joy’s Native Pot · Edmonton, Alberta
      </div>
    </footer>
  );
}

function FoodCard({ item, add }) {
  return (
    <article className="food-card">
      <Link
        to={`/menu?item=${encodeURIComponent(item.id)}`}
        className="food-photo"
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
        />
        <span>{item.category}</span>
      </Link>
      <div className="food-info">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <b className="price">
          Contact us
          <br />
          for pricing
        </b>
      </div>
      <div className="card-bottom">
        <small>{item.available}</small>
        {item.options ? (
          <Link className="text-button" to={`/menu?item=${encodeURIComponent(item.id)}`}>
            Choose portion <span>＋</span>
          </Link>
        ) : (
          <button className="text-button" onClick={() => add(item)}>
            Add to cart <span>＋</span>
          </button>
        )}
      </div>
    </article>
  );
}

function Home({ add }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <i /> MADE WITH LOVE IN EDMONTON
          </div>
          <h1>
            Authentic Nigerian
            <br />
            <em>Flavours, Made</em>
            <br />
            with Love.
          </h1>
          <p>{business.description}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/menu">
              Explore our menu <span>↗</span>
            </Link>
            <a
              className="button outline"
              href={WA}
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
            </a>
          </div>
          <div className="hero-meta">
            <span>✦ Freshly prepared</span>
            <span>✦ Edmonton & surrounding communities</span>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="A colourful freshly prepared Nigerian meal" />
          <div className="image-note">
            <span>✳</span>
            <div>
              <b>A taste of home</b>
              <small>Prepared fresh, with care</small>
            </div>
          </div>
        </div>
        <div className="hero-index">
          01 <span /> 04
        </div>
      </section>
      <section className="section featured">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</div>
            <h2>
              Made for the <em>table.</em>
            </h2>
          </div>
          <Link className="arrow-link" to="/menu">
            Explore all dishes <span>↗</span>
          </Link>
        </div>
        <div className="food-grid">
          {products.slice(0, 4).map((p) => (
            <FoodCard key={p.id} item={p} add={add} />
          ))}
        </div>
      </section>
      <section className="category-band">
        <div>
          <div className="eyebrow">FIND YOUR FAVOURITE</div>
          <h2>
            Good food, <em>your way.</em>
          </h2>
        </div>
        <div className="category-list">
          {categories.slice(1).map((c, i) => (
            <Link to="/menu" key={c}>
              <span>0{i + 1}</span>
              {c}
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>
      <section className="story-strip">
        <div className="story-photo">
          <img src={heroImg} alt="A selection of Nigerian dishes" loading="lazy" />
        </div>
        <div className="story-copy">
          <div className="eyebrow">A WARM WELCOME FROM JOY</div>
          <h2>
            The taste of home,
            <br />
            <em>right here in Edmonton.</em>
          </h2>
          <p>{business.story[0]}</p>
          <Link className="arrow-link" to="/about">
            Get to know us <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="section home-services">
        <div className="section-heading">
          <div><div className="eyebrow">MORE THAN A MEAL</div><h2>Made for <em>gathering.</em></h2></div>
          <Link className="arrow-link" to="/catering">Explore our services <span>↗</span></Link>
        </div>
        <div className="service-preview-grid">{business.services.map((service, index) => <Link to="/catering" className="service-preview" key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><b>↗</b></Link>)}</div>
      </section>
      <section className="catering-cta">
        <div>
          <div className="eyebrow">GATHER AROUND SOMETHING GOOD</div>
          <h2>
            Making room for <em>one more?</em>
          </h2>
          <p>
            Birthdays, weddings, family celebrations and everything in between.
            Let’s plan a meal your guests will remember.
          </p>
        </div>
        <Link className="button cream-button" to="/catering">
          Let’s talk catering <span>↗</span>
        </Link>
      </section>
    </>
  );
}

function Menu({ add }) {
  const location = useLocation();
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const id = new URLSearchParams(location.search).get("item");
    setDetail(id ? products.find((p) => p.id === id) || null : null);
  }, [location.search]);
  const filtered = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      p.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <main className="page-wrap">
      <div className="page-intro">
        <div className="eyebrow">JOY’S NATIVE POT · EDMONTON</div>
        <h1>
          Good things are <em>cooking.</em>
        </h1>
        <p>
          Explore our Nigerian favourites. Every dish is prepared fresh; please
          ask us to confirm availability and pricing.
        </p>
      </div>
      <div className="menu-tools">
        <div className="filters">
          {categories.map((c) => (
            <button
              className={cat === c ? "filter active" : "filter"}
              onClick={() => setCat(c)}
              key={c}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          aria-label="Search menu"
          placeholder="Search dishes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <p className="result-count">
        {filtered.length} dishes · Pricing and availability confirmed by
        WhatsApp
      </p>
      <div className="food-grid">
        {filtered.map((p) => (
          <FoodCard key={p.id} item={p} add={add} />
        ))}
      </div>
      {detail && (
        <div className="modal-backdrop" onClick={() => setDetail(null)}>
          <div className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setDetail(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img src={detail.image} alt={detail.name} />
            <div>
              <div className="eyebrow">{detail.category}</div>
              <h2 id="product-detail-title">{detail.name}</h2>
              <p>{detail.description}</p>
              {detail.options && (
                <label>
                  Portion
                  <select id="portion">
                    {detail.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              )}
              <b className="price">Contact us for pricing</b>
              <button
                className="button primary"
                onClick={() => {
                  add(detail, document.querySelector("#portion")?.value);
                  setDetail(null);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Cart({ cart, update, remove }) {
  const [name, setName] = useState("");
  const [fulfil, setFulfil] = useState("Pickup");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const subtotal = cart.reduce(
    (n, x) => n + (x.product.price == null ? 0 : x.product.price * x.qty),
    0,
  );
  const unpriced = cart.some((x) => x.product.price == null);
  function checkout(e) {
    e.preventDefault();
    if (!cart.length) {
      setError("Your cart is empty.");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your name before continuing.");
      return;
    }
    const lines = cart
      .map(
        (x) =>
          `- ${x.product.name}${x.option ? ` — ${x.option}` : ""} × ${x.qty} — ${x.product.price == null ? "price to be confirmed" : money(x.product.price * x.qty)}`,
      )
      .join("\n");
    const message = `Hello Joy's Native Pot! I would like to place an order.\n\nName: ${name}\n\nOrder items:\n\n${lines}\n\nSubtotal: ${unpriced ? `${money(subtotal)} for priced items; price confirmation required for unpriced items` : `${money(subtotal)}`}\n\nFulfilment preference: ${fulfil}\nDelivery location: ${fulfil === "Delivery" ? location || "To be confirmed" : "N/A"}\nAdditional notes: ${notes || "None"}\n\nPlease confirm availability and the final order total. Delivery availability and any additional charges must be confirmed by the business. Thank you.`;
    window.location.assign(wa(message));
  }
  return (
    <main className="page-wrap">
      <div className="page-intro">
        <div className="eyebrow">YOUR SELECTION</div>
        <h1>
          Your <em>basket.</em>
        </h1>
        <p>Review your dishes and tell us how you’d like to receive them.</p>
      </div>
      {cart.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✳</div>
          <h2>Your basket is ready for something good.</h2>
          <p>Take a look through the menu and add a few favourites.</p>
          <Link className="button primary" to="/menu">
            Browse the menu ↗
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((x) => (
              <article className="cart-item" key={x.key}>
                <img src={x.product.image} alt="" />
                <div className="cart-item-main">
                  <h3>{x.product.name}</h3>
                  <span>{x.option || x.product.category}</span>
                  <b>Contact us for pricing</b>
                  <div className="quantity">
                    <button
                      onClick={() => update(x.key, x.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{x.qty}</span>
                    <button
                      onClick={() => update(x.key, x.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="remove" onClick={() => remove(x.key)}>
                  Remove
                </button>
              </article>
            ))}
          </div>
          <form className="checkout-card" onSubmit={checkout}>
            <h2>Almost there.</h2>
            <p>
              We’ll open WhatsApp with your order details. You’ll send the
              message there to complete your request.
            </p>
            <label>
              Your name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="How should we address you?"
              />
            </label>
            <label>
              Pickup or delivery
              <select
                value={fulfil}
                onChange={(e) => setFulfil(e.target.value)}
              >
                <option>Pickup</option>
                <option>Delivery</option>
              </select>
            </label>
            {fulfil === "Delivery" && (
              <label>
                Delivery area
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Neighbourhood or postal code"
                />
              </label>
            )}
            <label>
              Additional notes
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything else we should know?"
              />
            </label>
            <div className="subtotal">
              <span>
                Subtotal {unpriced && <small>(priced items only)</small>}
              </span>
              <strong>
                {money(subtotal)}
                {unpriced ? " +" : ""}
              </strong>
            </div>
            {unpriced && (
              <p className="price-note">
                Some items have no listed price. Final pricing must be confirmed
                on WhatsApp.
              </p>
            )}
            <p className="price-note">
              Delivery availability and any additional charges are confirmed by
              Joy’s Native Pot.
            </p>
            {error && <p className="form-error">{error}</p>}
            <button className="button primary full" type="submit">
              Checkout on WhatsApp ↗
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

function About() {
  return (
    <main className="page-wrap">
      <div className="page-intro">
        <div className="eyebrow">OUR STORY</div>
        <h1>
          A little piece of <em>home.</em>
        </h1>
        {business.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <section className="about-content">
          <img src={heroImg} alt="A selection of Nigerian dishes" loading="lazy" />
        <div>
          <div className="eyebrow">MADE WITH LOVE, SHARED WITH YOU</div>
          <h2>
            Food that brings us <em>closer.</em>
          </h2>

          <h3 className="text-sm">Our Mission</h3>
          <p>{business.mission}</p>
          <h3 className="text-sm">Our Vision</h3>
          <p>{business.vision}</p>
          <Link className="button primary" to="/menu">
            Explore our menu ↗
          </Link>
        </div>
      </section>
      <section className="differentiators">
        <div className="section-heading"><div><div className="eyebrow">WHAT MAKES JOY’S NATIVE POT DIFFERENT</div><h2>Rooted in <em>care.</em></h2></div></div>
        <ul>{business.differentiators.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
      </section>
    </main>
  );
}

function Catering() {
  const [form, setForm] = useState({
    name: "",
    event: "",
    date: "",
    guests: "",
    dishes: "",
    fulfil: "Pickup",
    area: "",
    budget: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const set = (key, value) => setForm({ ...form, [key]: value });
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.event.trim() || !form.guests) {
      setError("Please add your name, event type and guest count.");
      return;
    }
    const msg = `Hello Joy's Native Pot! I would love to discuss catering.\n\nName: ${form.name}\nEvent type: ${form.event}\nEvent date: ${form.date || "To be confirmed"}\nNumber of guests: ${form.guests}\nPreferred dishes: ${form.dishes || "Please suggest options"}\nFulfilment preference: ${form.fulfil}\nDelivery area: ${form.fulfil === "Delivery" ? form.area || "To be confirmed" : "N/A"}\nEstimated budget: ${form.budget ? `CAD ${form.budget}` : "To be discussed"}\nAdditional notes: ${form.notes || "None"}\n\nPlease let me know what options are available. Thank you.`;
    window.location.assign(wa(msg));
  }
  return (
    <main className="page-wrap">
      <div className="page-intro">
        <div className="eyebrow">MAKE IT A GATHERING TO REMEMBER</div>
        <h1>
          Let’s make room <em>for everyone.</em>
        </h1>
        <p>
          Customized meals for birthdays, weddings, church events, corporate
          gatherings, family celebrations and private occasions.
        </p>
      </div>
      <section className="service-catalog" aria-label="Joy's Native Pot services">
        {business.services.map((service, index) => (
          <article className="service-detail" key={service.title}>
            <span>0{index + 1}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.sourceEndingNote && <small className="source-note">Owner note: {service.sourceEndingNote}</small>}
          </article>
        ))}
      </section>
      <div className="catering-layout">
        <div className="catering-copy">
          <h2>
            Good food belongs at <em>every gathering.</em>
          </h2>
          <p>
            Tell us a little about your occasion and what you have in mind. Joy
            will follow up with menu ideas, availability and pricing through
            WhatsApp.
          </p>
          <div className="catering-note">
            <span>✳</span>
            <p>
              Pickup is available. Delivery depends on your location and the
              size of your order.
            </p>
          </div>
          <a
            className="arrow-link"
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            See what we’re cooking on Instagram ↗
          </a>
        </div>
        <form className="enquiry-form" onSubmit={submit}>
          <h2>Tell us about your event</h2>
          <div className="form-grid">
            <label>
              Name
              <input
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
            </label>
            <label>
              Event type
              <input
                placeholder="Birthday, wedding..."
                value={form.event}
                onChange={(e) => set("event", e.target.value)}
                required
              />
            </label>
            <label>
              Event date
              <input
                type="date"
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
              />
            </label>
            <label>
              Number of guests
              <input
                type="number"
                min="1"
                value={form.guests}
                onChange={(e) => set("guests", e.target.value)}
                required
              />
            </label>
            <label className="wide">
              Preferred dishes
              <input
                placeholder="Tell us what you love"
                value={form.dishes}
                onChange={(e) => set("dishes", e.target.value)}
              />
            </label>
            <label>
              Pickup or delivery
              <select
                value={form.fulfil}
                onChange={(e) => set("fulfil", e.target.value)}
              >
                <option>Pickup</option>
                <option>Delivery</option>
              </select>
            </label>
            {form.fulfil === "Delivery" && (
              <label>
                Delivery area
                <input
                  value={form.area}
                  onChange={(e) => set("area", e.target.value)}
                />
              </label>
            )}
            <label>
              Estimated budget (CAD)
              <input
                type="number"
                min="0"
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
              />
            </label>
            <label className="wide">
              Additional notes
              <textarea
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </label>
          </div>
          {error && <p className="form-error">{error}</p>}
          <button className="button primary full">
            Discuss catering on WhatsApp ↗
          </button>
          <small>
            Opens WhatsApp with your enquiry for you to review and send.
          </small>
        </form>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="page-wrap">
      <div className="page-intro">
        <div className="eyebrow">WE’D LOVE TO HEAR FROM YOU</div>
        <h1>
          Let’s <em>connect.</em>
        </h1>
        <p>
          {business.description}
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-main">
          <span className="contact-icon">✳</span>
          <div className="eyebrow">CALL OR WHATSAPP</div>
          <a className="contact-phone" href={`tel:${business.phoneHref}`}>{business.phone}</a>
          <p>For menu questions, orders and catering enquiries.</p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Chat on WhatsApp ↗
          </a>
        </div>
        <div className="contact-details">
          <div>
            <span>01</span>
            <h3>Location</h3>
            <p>{business.serviceArea}</p>
          </div>
          <div>
            <span>02</span>
            <h3>Pickup & delivery</h3>
            <p>Pickup available</p>
            <small>
              Delivery depends on your location and the size of your order.
            </small>
          </div>
          <div>
            <span>03</span>
            <h3>Social & reviews</h3>
            <div className="contact-links">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram {business.instagramHandle} ↗
              </a>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Facebook ↗
              </a>
              <a
                href={business.googleUrl}
                target="_blank"
                rel="noreferrer"
              >
                Google Business Profile ↗
              </a>
              <a
                href={business.reviewUrl}
                target="_blank"
                rel="noreferrer"
              >
                Leave a Google review ↗
              </a>
            </div>
          </div>
          <div>
            <span>04</span>
            <h3>Google Search (SEO)</h3>
            <a href={business.reviewUrl} target="_blank" rel="noreferrer">Joy&apos;s Native Pot &amp; Pastries ↗</a>
          </div>
          <div>
            <span>05</span>
            <h3>Email</h3>
            <p>{business.email}</p>
            <small>Email address not yet supplied. Update this placeholder when the owner provides it.</small>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("joys-cart") || "[]");
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("joys-cart", JSON.stringify(cart));
  }, [cart]);
  const count = cart.reduce((n, x) => n + x.qty, 0);
  function add(product, option = "") {
    const key = `${product.id}:${option || "default"}`;
    setCart((old) => {
      const found = old.find((x) => x.key === key);
      return found
        ? old.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x))
        : [...old, { key, product, option, qty: 1 }];
    });
  }
  function update(key, qty) {
    if (qty < 1) return;
    setCart((old) =>
      old.map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x)),
    );
  }
  function remove(key) {
    setCart((old) => old.filter((x) => x.key !== key));
  }
  const path = location.pathname;
  let page;
  if (path === "/menu") page = <Menu add={add} />;
  else if (path === "/about") page = <About />;
  else if (path === "/catering") page = <Catering />;
  else if (path === "/contact") page = <Contact />;
  else if (path === "/cart")
    page = <Cart cart={cart} update={update} remove={remove} />;
  else page = <Home add={add} />;
  return (
    <div className="site-shell">
      <Header count={count} />
      {page}
      <Footer />
      <a
        className="floating-wa"
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Joy's Native Pot on WhatsApp"
      >
        ◔
      </a>
    </div>
  );
}
