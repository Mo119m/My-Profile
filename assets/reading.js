// Reading table: live search, column sorting, and grouping by read date.
(function () {
  var table = document.getElementById("papers-table");
  if (!table) return;

  var tbody = table.querySelector("tbody");
  var search = document.getElementById("paper-search");
  var noResults = document.getElementById("no-results");
  var headers = table.querySelectorAll("th[data-sort]");

  // Snapshot the original paper rows so we can re-render freely.
  var rows = Array.prototype.slice.call(tbody.querySelectorAll("tr.paper"));

  var state = { key: "read", dir: "desc", q: "" };

  var MONTHS = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

  function prettyDate(iso) {
    var p = (iso || "").split("-");
    if (p.length !== 3) return iso || "";
    return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
  }

  function sortValue(row, key) {
    if (key === "read") return row.getAttribute("data-read") || "";
    if (key === "published") return row.getAttribute("data-published") || "";
    if (key === "title") return row.querySelector(".paper-title").textContent.trim().toLowerCase();
    if (key === "source") return (row.querySelector(".col-source") || {}).textContent || "";
    if (key === "tags") return row.querySelector("td:last-child").textContent.trim().toLowerCase();
    return "";
  }

  function matches(row, q) {
    return row.textContent.toLowerCase().indexOf(q) !== -1;
  }

  function render() {
    var visible = rows.filter(function (r) { return matches(r, state.q); });

    visible.sort(function (a, b) {
      var va = sortValue(a, state.key), vb = sortValue(b, state.key);
      if (va < vb) return state.dir === "asc" ? -1 : 1;
      if (va > vb) return state.dir === "asc" ? 1 : -1;
      return 0;
    });

    tbody.innerHTML = "";
    var lastDate = null;
    visible.forEach(function (r) {
      // Only group with date headers in the default "by read date" view.
      if (state.key === "read") {
        var d = r.getAttribute("data-read");
        if (d !== lastDate) {
          var dr = document.createElement("tr");
          dr.className = "date-row";
          dr.innerHTML = '<td colspan="4">' + prettyDate(d) + "</td>";
          tbody.appendChild(dr);
          lastDate = d;
        }
      }
      tbody.appendChild(r);
    });

    noResults.style.display = visible.length ? "none" : "";
  }

  if (search) {
    search.addEventListener("input", function () {
      state.q = search.value.trim().toLowerCase();
      render();
    });
  }

  headers.forEach(function (th) {
    th.addEventListener("click", function () {
      var key = th.getAttribute("data-sort");
      if (state.key === key) {
        state.dir = state.dir === "asc" ? "desc" : "asc";
      } else {
        state.key = key;
        state.dir = "asc";
      }
      headers.forEach(function (h) { h.removeAttribute("aria-sort"); });
      th.setAttribute("aria-sort", state.dir === "asc" ? "ascending" : "descending");
      render();
    });
  });

  render();
})();
