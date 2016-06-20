app.controller('index', function ($scope, Sorting) {

    var Algorithm = function (name, sort) {
        this.Name = name;
        this.Context = null;
        this.Collection = [];
        this.Sort = sort;
    };

    //settings
    $scope.title = 'Index';
    $scope.heightOfCanvas = 100;
    $scope.spaceBetweenBars = 5;
    //algorithms
    var Insertion = new Algorithm('Insertion', Sorting.InsertionSort);
    var Bubble = new Algorithm('Bubble', Sorting.BubbleSort);
    var Merge = new Algorithm('Merge', Sorting.MergeSort);
    $scope.algorithms = [Insertion, Bubble, Merge];

    /**
     * Populates Collection with random gens
     */
    Algorithm.prototype.CreateCollection = function(amount) {
        this.Collection = [];
        for (var i = 0; i < amount; i++) {
            this.Collection.push(GetRandomInt(10, 100));
        }
    };

    /**
     * Sets the canvas context
     */
    Algorithm.prototype.SetContext = function() {
        this.Context = document.getElementById(this.Name + "Canvas").getContext("2d");
    };

    /**
     * Draws the collection
     */
    Algorithm.prototype.DrawCollection = function() {
        if(this.Context == null)
            this.SetContext();
        //clear canvas
        this.Context.clearRect(0, 0, this.Context.canvas.width, this.Context.canvas.height);
        //draw each bar
        for (var i = 0; i < this.Collection.length; i++) {
            this.Context.beginPath();
            this.Context.moveTo(10 + ($scope.spaceBetweenBars * i), $scope.heightOfCanvas);
            this.Context.lineTo(10 + ($scope.spaceBetweenBars * i), this.Collection[i]);
            this.Context.strokeStyle = '#000';
            this.Context.stroke();
        }
    };

    $scope.Generate = function (algorithm) {
        //create collection array
        algorithm.CreateCollection(50);
        algorithm.DrawCollection();
    };

    $scope.Sort = function (algorithm) {
        algorithm.Sort();
    };

    /**
     * Generates random number in given range
     * @param min minimum of range
     * @param max maximum of range
     * @returns {Number} random gen
     */
    var GetRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
});