var app = angular.module('app', []);

app.factory('Sorting', function ($window) {
    var root = {};

    root.InsertionSort = function() {
        console.log(this);
    };

    root.BubbleSort = function() {
        console.log(this);
    };

    root.MergeSort = function() {
        console.log(this);
    };

    return root;
});