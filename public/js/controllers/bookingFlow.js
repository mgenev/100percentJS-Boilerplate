angular.module('mean.bookingflow').controller('BookingFlowController', ['$scope', '$routeParams', '$location', 'Global', 'Reservations', function ($scope, $routeParams, $location, Global, Reservations, Clients, Services, Users) {
    $scope.global = Global;
    console.log("booking flow controller wired;");

    $scope.start = function () {
        console.log("click works, start fires");
        $location.path("bookingflow/date-location" );
    }


    // $scope.create = function() {
    //     var reservation = new Reservations({
    //         title: this.title,
    //         content: this.content
    //     });
    //     reservation.$save(function(response) {
    //         $location.path("reservations/" + response._id);
    //     });

    //     this.title = "";
    //     this.content = "";
    // };

    // $scope.remove = function(reservation) {
    //     reservation.$remove();  

    //     for (var i in $scope.reservation) {
    //         if ($scope.reservations[i] == reservation) {
    //             $scope.reservations.splice(i, 1);
    //         }
    //     }
    // };

    // $scope.update = function() {
    //     var reservation = $scope.reservation;
    //     if (!reservation.updated) {
    //         reservation.updated = [];
    //     }
    //     reservation.updated.push(new Date().getTime());

    //     reservation.$update(function() {
    //         $location.path('reservations/' + reservation._id);
    //     });
    // };

    // $scope.find = function() {
    //     Reservations.query(function(reservations) {
    //         $scope.reservations = reservations;
    //     });
    // };

    // $scope.findOne = function() {
    //     Reservations.get({
    //         reservationId: $routeParams.reservationId
    //     }, function(reservation) {
    //         $scope.reservation = reservation;
    //     });
    // };
}]);