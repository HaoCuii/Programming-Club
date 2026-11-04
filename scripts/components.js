/* =========================================================
   COMPONENTS
   ---------------------------------------------------------
   👋 You do NOT need to edit this file.

   This file creates two functions:

     addMember({ ... })        → used in content/members.js
     addAnnouncement({ ... })  → used in content/announcements.js

   Each function takes your info and builds the HTML for you,
   then puts it on the page.
   ========================================================= */


/* ---------------------------------------------------------
   addMember
   Adds one member to the Members page.

   name         (required)  "Jane Doe"
   description  (required)  "Loves Python and building games."
   image        (optional)  "images/jane.jpg"
   --------------------------------------------------------- */
function addMember({ name, description, image }) {
  // Find the spot on the page where members go
  const list = document.getElementById("members-list");
  if (!list) return;

  // If no photo was given, use the default one
  const photo = image || "images/placeholder.svg";

  // Build the member card
  const card = document.createElement("section");
  card.className = "member";

  const img = document.createElement("img");
  img.src = photo;
  img.alt = name;
  // If the photo path is wrong, show the default photo instead
  img.onerror = () => {
    img.onerror = null;
    img.src = "images/placeholder.svg";
  };

  const text = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const about = document.createElement("p");
  about.textContent = description;

  // Put the pieces together
  text.append(heading, about);
  card.append(img, text);
  list.append(card);
}


/* ---------------------------------------------------------
   addAnnouncement
   Adds one announcement to the Home page.

   title        (required)  "First Meeting!"
   date         (required)  "Nov 4, 2026"
   description  (required)  "Meet in room 204 after school."
   tags         (optional)  ["Meeting", "Beginners"]
   --------------------------------------------------------- */
function addAnnouncement({ title, date, description, tags }) {
  // Find the spot on the page where announcements go
  const list = document.getElementById("announcements-list");
  if (!list) return;

  // Build the announcement
  const entry = document.createElement("section");
  entry.className = "entry";

  // Top line: title ........ date
  const row = document.createElement("div");
  row.className = "row";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const dots = document.createElement("span");
  dots.className = "leader";

  const time = document.createElement("time");
  time.textContent = date;

  row.append(heading, dots, time);

  // Description
  const about = document.createElement("p");
  about.textContent = description;

  entry.append(row, about);

  // Tags (only if there are some)
  if (tags && tags.length > 0) {
    const tagLine = document.createElement("p");
    tagLine.className = "tags";
    tagLine.textContent = tags.join(" · ");
    entry.append(tagLine);
  }

  list.append(entry);
}
