var app = angular.module('app', []);

app.factory('Sorting', function ($window) {
    var root = {};

    root.InsertionSort = function() {
        var alg = this;

        //start at -1 because it will increment to 0
        var i = -1;

        var interval = setInterval(function() {
            i++;
            alg.Position = i;
            if(i >= alg.Collection.length) {
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

    root.BubbleSort = function() {
        var alg = this;

        //start at -1 because it will increment to 0
        var i = -1;

        var interval = setInterval(function() {
            i++;
            alg.Position = i;
            if(i >= alg.Collection.length) {
                clearInterval(interval);
                return;
            }

            // for (var j = 0; j < (alg.Collection.length - i - 1); j++) { //Notice that j < (length - i)
            //     //Compare the adjacent positions
            //     if(alg.Collection[j] < alg.Collection[j+1]) {
            //         //Swap the numbers
            //         var tmp = alg.Collection[j];  //Temporary variable to hold the current number
            //         alg.Collection[j] = alg.Collection[j+1]; //Replace current number with adjacent number
            //         alg.Collection[j+1] = tmp; //Replace adjacent number with current number
            //     }
            // }

            alg.DrawCollection();
        }, 50);
    };

    root.MergeSort = function() {
        console.log(this);
    };

    return root;
});