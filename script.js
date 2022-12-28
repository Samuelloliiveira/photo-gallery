function checksIfHoveredOrUnhoveredFromTtem() {
    const gallery = document.querySelectorAll('.gallery .gallery-item')
    
    for (let item of gallery) {
        item.addEventListener("mouseover", () => {
            applyCounterEffectIfThereIsNoHover(item, gallery)
        })

        item.addEventListener("mouseout", () => {
            applyCounterEffectIfThereIsNoHover(item, gallery)
        })
    }

}

function applyCounterEffectIfThereIsNoHover(item, gallery) {
    for (let i = 0; i < gallery.length; i++) {
        if (item != gallery[i]) {
            gallery[i].classList.toggle('disabled')
        }
    }
}

checksIfHoveredOrUnhoveredFromTtem()