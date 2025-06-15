document.addEventListener("DOMContentLoaded", () => {
  const guestForm = document.getElementById("guest-form");
  const guestInput = document.getElementById("guest-name");
  const categoryInput = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");

  const maxGuests = 10;

  const defaultGuests = [
    { name: "caleb", category: "Friend" },
    { name: "ruto", category: "Family" },
    { name: "mc wantam", category: "Colleague" }
  ];

  defaultGuests.forEach(({ name, category }) => {
    addGuest(name, category);
  });

  guestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = guestInput.value.trim();
    const category = categoryInput.value;

    if (!name || !category) return;

    if (guestList.children.length >= maxGuests) {
      alert("⚠️ Guest limit reached (10).");
      return;
    }

    addGuest(name, category);
    guestInput.value = "";
    categoryInput.value = "";
  });

  function addGuest(name, category) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> - `;

    const tag = document.createElement("span");
    tag.textContent = category;
    tag.style.padding = "2px 6px";
    tag.style.borderRadius = "5px";
    tag.style.marginRight = "10px";
    tag.style.fontSize = "0.9em";
    tag.style.color = "#fff";

    // 🎨 Color code by category
    if (category === "Friend") tag.style.backgroundColor = "dodgerblue";
    else if (category === "Family") tag.style.backgroundColor = "green";
    else if (category === "Colleague") tag.style.backgroundColor = "purple";

    li.appendChild(tag);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => li.remove());

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Not Attending";
    rsvpBtn.style.marginLeft = "10px";

    rsvpBtn.addEventListener("click", () => {
      if (rsvpBtn.textContent === "Not Attending") {
        rsvpBtn.textContent = "Attending ✅";
        rsvpBtn.style.backgroundColor = "lightgreen";
      } else {
        rsvpBtn.textContent = "Not Attending";
        rsvpBtn.style.backgroundColor = "";
      }
    });

    li.appendChild(deleteBtn);
    li.appendChild(rsvpBtn);
    guestList.appendChild(li);
  }
});
