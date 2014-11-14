angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaSQLite) {
})

.controller('FriendsCtrl', function($scope, $cordovaSQLite, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $cordovaSQLite, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $cordovaSQLite) {
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            alert("INSERT ID -> " + res.insertId);
        }, function (err) {
            alert(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                alert("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                alert("No results found");
            }
        }, function (err) {
            alert(err);
        });
    }
});
