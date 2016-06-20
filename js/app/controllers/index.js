app.controller('index', function ($scope) {

    //settings
    $scope.title = 'Index';;
    $scope.heightOfCanvas = 100;
    $scope.spaceBetweenBars = 5;

    $scope.algorithms = ['Insertion', 'Bubble', 'Merge'];

    $( document ).ready(function() {

        $scope.algorithms.forEach(function(a) {

            //get canvas and context
            var canvas = document.getElementById(a+"Canvas");
            var context = canvas.getContext("2d");

            setInterval((function() {
                drawRandomCollection(50, context);
            }), 1000);
        });



        /**
         * Draws a random collection
         * @param amount number of elements
         */
        var drawRandomCollection = function(amount, context) {
            //clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < amount; i++) {
                var randomGen = getRandomInt(5, 80);
                context.beginPath();
                context.moveTo(10+($scope.spaceBetweenBars*i), $scope.heightOfCanvas);
                context.lineTo(10+($scope.spaceBetweenBars*i), getRandomInt(randomGen, 100));
                context.strokeStyle = '#000';
                context.stroke();
            }
        }

        /**
         * Generates random number in given range
         * @param min minimum of range
         * @param max maximum of range
         * @returns {number}
         */
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
});