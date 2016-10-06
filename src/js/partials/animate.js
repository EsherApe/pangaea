var waypoint = new Waypoint({
    element: document.getElementById(''),
    handler: function(direction) {
        $('#exampleImg').addClass('');
        console.log('point');
    }
})