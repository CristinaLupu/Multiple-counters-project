window.onload = () => {
  class Panel {
    nr = 0;

    lowerCount() {
      this.nr--;
      this.numberEl.innerHTML = this.nr;
      this.colorNr();
    }

    addCount() {
      this.nr++;
      this.numberEl.innerHTML = this.nr;
      this.colorNr();
    }

    colorNr() {
      if (this.nr < 0) {
        this.numberEl.style.color = "red";
      } else if (this.nr > 0) {
        this.numberEl.style.color = "green";
      } else {
        this.numberEl.style.color = "#333";
      }
    }

    constructor(panel) {
      this.numberEl = panel.querySelector(".counter-nr");

      panel.querySelector(".lower-count").onclick = () => {
        this.lowerCount();
      };
      panel.querySelector(".add-count").onclick = () => {
        this.addCount();
      };
    }
  }

  new Panel(document.querySelector("#container-1"));
  new Panel(document.querySelector("#container-2"));
};
