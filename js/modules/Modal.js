export default class NewModal {
  constructor(popupTitle, workerRole, desc, icon) {
    this.popupTitle = popupTitle;
    this.workerRole = workerRole;
    this.desc = desc;
    this.icon = icon;
  }

  createDiv(theClass) {
    const div = document.createElement("div");
    if (typeof theClass === "string") {
      div.className = theClass;
    }
    return div;
  }

  createBackdrop(theClass) {
    const backdrop = document.createElement("div");
    if (typeof theClass === "string") {
      backdrop.className = theClass;
    }
    backdrop.addEventListener("click", () => {
      this.closeModal();
    });
    return backdrop;
  }

  createPopupTitle(theClass) {
    const popupTitle = document.createElement("h3");
    if (typeof theClass === "string") {
      popupTitle.className = theClass;
    }
    popupTitle.textContent = this.popupTitle;
    return popupTitle;
  }

  createWorkerRole(theClass) {
    const workerRole = document.createElement("p");
    if (typeof theClass === "string") {
      workerRole.className = theClass;
    }
    workerRole.textContent = this.workerRole;
    return workerRole;
  }
  createDesc(theClass) {
    const desc = document.createElement("p");
    if (typeof theClass === "string") {
      desc.className = theClass;
    }
    desc.textContent = this.desc;
    return desc;
  }

  createButton(theClass) {
    const button = document.createElement("button");
    if (typeof theClass === "string") {
      button.className = theClass;
    }
    button.addEventListener("click", () => {
      this.closeModal();
    });
    return button;
  }
  createIcon() {
    const icon = document.createElement("img");
    icon.setAttribute("src", this.icon);
    return icon;
  }

  closeModal() {
    const body = document.querySelector("body");
    const popup = document.querySelector(".modal");
    const nav = document.querySelector(".nav");
    body.removeChild(popup);
    nav.style.display = "block";
  }

  createModal() {
    const mainDiv = this.createDiv("modal");
    mainDiv.appendChild(this.createBackdrop("modal__backdrop"));
    const popup = mainDiv.appendChild(this.createDiv("modal__popup"));
    const popupContent = popup.appendChild(this.createDiv("modal__content"));
    popupContent.appendChild(this.createPopupTitle("modal__title"));
    popupContent.appendChild(this.createWorkerRole("modal__role"));
    popupContent.appendChild(this.createDesc("modal__desc"));
    const button = popupContent.appendChild(
      this.createButton("modal__closeBtn")
    );
    button.appendChild(this.createIcon());
    return mainDiv;
  }
}
