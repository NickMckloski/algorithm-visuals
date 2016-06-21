var app = angular.module('app', []);

app.factory('Sorting', function ($window) {
    var root = {};

    /**
     * Insertion sort logic
     * @constructor
     */
    root.InsertionSort = function() {
        var alg = this;

        //start at -1 because it will increment to 0
        var i = -1;

        //algorithm is run through an interval to slow it down
        //and allow visual canvas the be drawn.
        var interval = setInterval(function() {
            i++;
            alg.Position = i;
            if(i >= alg.Collection.length) {
                alg.Position = null;
                alg.DrawCollection();
                clearInterval(interval);
                return;
            }

            var temp = alg.Collection[i];
            /*Check through the sorted part and compare with the
             number in tmp. If large, shift the number*/
            for(var j = i - 1; j >= 0 && (alg.Collection[j] < temp); j--) {
                //Shift the number
                alg.Collection[j+1] = alg.Collection[j];
            }
            //Insert the copied number at the correct position
            //in sorted part.
            alg.Collection[j+1] = temp;
            alg.DrawCollection();
        }, 50);

    };

    /**
     * Bubble sort logic
     * @constructor
     */
    root.BubbleSort = function() {
        var alg = this;

        //start at -1 because it will increment to 0
        var i = -1;
        var changesMade = true;
        var lastUnsortedIndex = alg.Collection.length;

        //algorithm is run through an interval to slow it down
        //and allow visual canvas the be drawn.
        var interval = setInterval(function() {
            i++;
            alg.Position = i;
            if(i >= lastUnsortedIndex) {
                if(!changesMade) {
                    //end loop
                    alg.Position = null;
                    alg.DrawCollection();
                    clearInterval(interval);
                    return;
                } else {
                    //reset loop
                    changesMade = false;
                    lastUnsortedIndex = i - 1;
                    i = 0;
                }
            }

            //compare elements
            if(alg.Collection[i] < alg.Collection[i+1]) {
                var temp = alg.Collection[i + 1];
                //replace elements
                alg.Collection[i + 1] = alg.Collection[i];
                alg.Collection[i] = temp;
                changesMade = true;
            }

            alg.DrawCollection();
        }, 15);
    };


    root.MergeSort = function() {
        console.log(this);
    };

    return root;
});