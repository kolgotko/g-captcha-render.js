function gCaptchaRender(selector = '.g-recaptcha') {

    let list = document.querySelectorAll(selector);
    let nodes = [].slice.call(list);

    nodes.forEach((node) => {

        grecaptcha.render(node, node.dataset);

    });

};
