var app = angular.module('app', []);

app.factory('Sorting', function ($window) {
    var root = {};

    /**
     * Insertion sort logic
     */
    root.InsertionSort = function() {
        var alg = this;

        var i = 0;

        //algorithm is run through an interval to slow it down
        //and allow visual canvas the be drawn.
        var interval = setInterval(function() {
            alg.Position = i;
            if(i >= alg.Collection.length) {
                //reset loop
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

            i++;
            alg.DrawCollection();
        }, 50);

    };

    /**
     * Bubble sort logic
     */
    root.BubbleSort = function() {
        var alg = this;

        var i = 0;
        var changesMade = true;
        var lastUnsortedIndex = alg.Collection.length;

        //algorithm is run through an interval to slow it down
        //and allow visual canvas the be drawn.
        var interval = setInterval(function() {
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
                //replace elements
                var temp = alg.Collection[i + 1];
                alg.Collection[i + 1] = alg.Collection[i];
                alg.Collection[i] = temp;
                changesMade = true;
            }

            i++;
            alg.DrawCollection();
        }, 5);
    };

    /**
     * Merge sort logic
     */
    root.MergeSort = function() {
        var alg = this;

        //reused compare function
        function compare(a, b) {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        }

        //main merging logic
        function bottomUpMerge(array, leftPosition, chunkSize, workArray, compare) {
            var i;
            var rightPosition = leftPosition + chunkSize;
            var endPosition = Math.min(leftPosition + chunkSize * 2 - 1,
                array.length - 1);
            var leftIndex = leftPosition;
            var rightIndex = rightPosition;

            for (i = 0; i <= endPosition - leftPosition; i++) {
                if (leftIndex < rightPosition &&
                    (rightIndex > endPosition ||
                    compare(array[leftIndex], array[rightIndex]) <= 0)) {
                    workArray[i] = array[leftIndex++];
                } else {
                    workArray[i] = array[rightIndex++];
                }
            }

            for (i = leftPosition; i <= endPosition; i++) {
                array[i] = workArray[i - leftPosition];
            }
        }


        var workArray = new Array(alg.Collection.length);
        var chunkSize = 1;
        var interval = setInterval(function () {
            if (chunkSize < alg.Collection.length) {
                var i = 0;

                alg.Position = chunkSize;

                //split into chunks and merge
                while (i < alg.Collection.length - chunkSize) {
                    bottomUpMerge(alg.Collection, i, chunkSize, workArray, compare);
                    i += chunkSize * 2;
                }

                chunkSize *= 2;
                alg.DrawCollection();
            } else {
                //end loop
                alg.Position = null;
                alg.DrawCollection();
                clearInterval(interval);
            }

        }, 100);

    };

    return root;
});