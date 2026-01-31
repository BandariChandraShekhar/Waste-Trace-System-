function registerWaste() {
  fetch("/api/waste/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      wasteType: document.getElementById("type").value,
      description: document.getElementById("desc").value
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("qr").src = data.qrCode;
    alert("Waste Registered");
  });
}

function updateStatus(status) {
  const id = document.getElementById("cid")?.value ||
             document.getElementById("rid").value;

  fetch(`/api/waste/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  })
  .then(() => alert("Status Updated"));
}