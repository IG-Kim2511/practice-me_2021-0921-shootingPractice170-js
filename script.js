(function (params) {

    const stage = document.querySelector('.stage');
    
    const resetBtn = document.querySelector('.reset');

    // js 10

    stage.addEventListener('click',clickHandler);

    function clickHandler(e) {
        if(e.target.classList.contains('poke')){
            stage.removeChild(e.target);

        }
        
    }
    
})();