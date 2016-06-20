app.controller('index', function ($scope) {

    var Algorithm = function (name) {
        this.Name = name;
        this.Collection = [];
    };

    //settings
    $scope.title = 'Index';
    $scope.heightOfCanvas = 100;
    $scope.spaceBetweenBars = 5;
    //array of algorithms
    $scope.algorithms = [new Algorithm('Insertion'), new Algorithm('Bubble'), new Algorithm('Merge')];

    /**
     * Populates Collection with random gens
     */
    Algorithm.prototype.CreateCollection = function(amount) {
        this.Collection = [];
        for (var i = 0; i < amount; i++) {
            this.Collection.push(getRandomInt(10, 100));
        }
    };

    /**
     * Generates a random collection for the given algorithm
     * @param algorithm
     */
    $scope.generate = function (algorithm) {
        //get canvas and context
        var canvas = document.getElementById(algorithm.Name + "Canvas");
        var context = canvas.getContext("2d");

        //create collection array
        algorithm.CreateCollection(50);

        drawCollection(algorithm.Collection, context);
    };


    /**
     * Draws a collection
     * @param collection
     * @param context
     */
    function drawCollection(collection, context) {
        //clear canvas
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //draw each bar
        for (var i = 0; i < collection.length; i++) {
            context.beginPath();
            context.moveTo(10 + ($scope.spaceBetweenBars * i), $scope.heightOfCanvas);
            context.lineTo(10 + ($scope.spaceBetweenBars * i), collection[i]);
            context.strokeStyle = '#000';
            context.stroke();
        }
    }

    /**
     * Generates random number in given range
     * @param min minimum of range
     * @param max maximum of range
     * @returns {Number} random gen
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});