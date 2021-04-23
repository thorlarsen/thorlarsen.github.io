function addToc() {
  const items = [
    {
      "label":'Week 1 Notes',
      "url":'week1/index.html'
    },
    {
      "label":'Week 2 Notes',
      "url":'week2/index.html'
    }  
  ];

  items.forEach(writeList) 

  function writeList(item) {
    let link = document.createElement("a");
    let toc = document.getElementById("toc");
    let lineItem = document.createElement("li");

    link.textContent = item.label;
    link.setAttribute('href', item.url);
    lineItem.appendChild(link);
    toc.appendChild(lineItem);
  }

}
