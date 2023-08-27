{
    for (let i = 0; i < 10; i++) {
        document.write(`<div class="first_cycle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque.
                      </div>`);
    }
    for (let i = 0; i < 10; i++) {
        document.write(`<div class="second_cycle">
                            <p class = "index">${i} - </p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </div>`);
    }
    {
    let i = 0;
    while (i < 20) {
        document.write(`<h1 class="while_cycle_1">
                            Lorem ipsum dolor sit amet!
                      </h1>`);
        i++;
    }
    }
    {
    let i = 0;
    while (i < 20) {
        document.write(`<h1 class="while_cycle_2">
                            Lorem ipsum dolor sit amet - ${i}
                      </h1>`);
        i++;
    }
    }
}